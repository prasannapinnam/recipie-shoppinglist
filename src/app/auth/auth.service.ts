import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, BehaviorSubject, tap, throwError } from "rxjs";
import { Params, Router } from '@angular/router';
import { User } from "./user.model";

export interface AuthResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: string
}
@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User | null>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    signUp(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAjOppxquNVi77i5nE6upGqm3v78otCro',
            { email: email, password: password, returnSecureToken: true }).pipe(catchError(this.handleResponse), tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

            }))
    }

    logIn(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAjOppxquNVi77i5nE6upGqm3v78otCro', { email: email, password: password, returnSecureToken: true })
            .pipe(catchError(this.handleResponse), tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }));
    }

    logOut() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationDuration)
    }

    autoLogin() {
        let userData = localStorage.getItem('userData');

        if (!userData) {
            return;
        }
        let userDataParsed: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationTime: string
        } = JSON.parse(userData);

        const loggedInUser = new User(userDataParsed!.email, userDataParsed.id,
            userDataParsed._token, new Date(userDataParsed._tokenExpirationTime))

        if (loggedInUser.token) {
            this.user.next(loggedInUser);
            const expirationDuration = new Date(userDataParsed._tokenExpirationTime).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }

    }

    handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationTime = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email, userId, token, expirationTime);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify({
            email: user.email,
            id: user.id,
            _token: token,
            _tokenExpirationTime: expirationTime.toISOString()
        }));
    }

    handleResponse(errorResponse: HttpErrorResponse) {
        console.log(errorResponse);
        let errorMessage = 'an unknown error has been occured'
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'this email already exists'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'the credentials entered are invalid'
                break;
        };
        return throwError(errorMessage);
    }
}
