import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipiesService } from "../recipies/recipies.service";
import { Recipie } from "../recipies/recipies.model";
import { map, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataStorageService {
    constructor(private http: HttpClient, private recipieService: RecipiesService) {
    }

    storeRecipies() {
        const recipies = this.recipieService.getRecipies();
        this.http.put('https://recipie-shoppinglist-default-rtdb.asia-southeast1.firebasedatabase.app/recipies.json', recipies).subscribe((response) => {
        })
    }

    fetchRecipies() {
        return this.http.get<Recipie[]>('https://recipie-shoppinglist-default-rtdb.asia-southeast1.firebasedatabase.app/recipies.json').
            pipe(
                map((recipies) => {
                    return recipies.map(recipie => ({ ...recipie, ingredients: recipie.ingredients ? recipie.ingredients : [] }))
                }),
                tap((recipies: Recipie[]) => {
                    this.recipieService.setRecipies(recipies);
                }))
    }
}