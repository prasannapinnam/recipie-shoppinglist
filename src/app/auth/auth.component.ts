import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponse, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { PlaceHolderDirective } from "../shared/placeholder/place-holder.directive";
import { AlertComponent } from "../shared/alert/alert.component";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    errorMessage = '';
    @ViewChild(PlaceHolderDirective) alertHost!: PlaceHolderDirective;
    closeSub!: Subscription;


    constructor(private authService: AuthService, private router: Router) { }
    onModeSwitch() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }

        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<AuthResponse>;


        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.logIn(email, password);
        }
        else {
            authObs = this.authService.signUp(email, password);
        }

        authObs.subscribe({
            next: response => {
                console.log(email, password, response);
                this.isLoading = false;
                this.router.navigate(['/recipies']);
            }, error: errorMessage => {
                console.log(errorMessage);
                this.errorMessage = errorMessage;
                this.createErrorAlert(errorMessage);
                this.isLoading = false;
            }
        })

        form.reset();
    }

    handleError() {
        this.errorMessage = '';
    }

    createErrorAlert(error: string) {
        const viewContainerRef = this.alertHost.viewContainerRef;
        viewContainerRef.clear();

        const componentRef = viewContainerRef.createComponent(AlertComponent);
        componentRef.instance.message = error;

        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            viewContainerRef.clear();
        });
    }

}