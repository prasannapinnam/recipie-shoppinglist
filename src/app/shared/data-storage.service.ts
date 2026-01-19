import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipiesService } from "../recipies/recipies.service";
import { Recipie } from "../recipies/recipies.model";
import { EMPTY, exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { User } from "../auth/user.model";

@Injectable({ providedIn: "root" })
export class DataStorageService {
    constructor(private http: HttpClient, private recipieService: RecipiesService, private authService: AuthService) {
    }

    storeRecipies() {
        const recipies = this.recipieService.getRecipies();
        this.http.put('https://recipie-shoppinglist-default-rtdb.asia-southeast1.firebasedatabase.app/recipies.json', recipies).subscribe((response) => {
        })
    }

    fetchRecipies() {
        return this.http.get<Recipie[]>(
            'https://recipie-shoppinglist-default-rtdb.asia-southeast1.firebasedatabase.app/recipies.json'

        ).pipe(map((recipies) => {
            if (!recipies) {
                return [];
            }

            return recipies.map(recipie => ({ ...recipie, ingredients: recipie.ingredients ? recipie.ingredients : [] }))
        }),
            tap((recipies: Recipie[]) => {
                this.recipieService.setRecipies(recipies);
            }))

    }
}