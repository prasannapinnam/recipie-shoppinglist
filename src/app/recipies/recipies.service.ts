import { Injectable } from "@angular/core";
import { Recipie } from "./recipies.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RecipiesService {
    recipies: Recipie[] = [];
    recipiesUpdated = new Subject<Recipie[]>();

    constructor(private router: Router) { }
    getRecipies() {
        return this.recipies.slice();
    }

    getRecipie(index: number) {
        return this.recipies[index];
    }

    addRecipie(newRecipie: Recipie) {
        this.recipies.push(newRecipie);
        this.recipiesUpdated.next(this.recipies.slice());
    }

    updateRecipie(index: number, updatedRecipie: Recipie) {
        this.recipies[index] = updatedRecipie;
        this.recipiesUpdated.next(this.recipies.slice());
    }

    deleteRecipie(recipieId: number) {
        this.recipies.splice(recipieId, 1);
        this.recipiesUpdated.next(this.recipies.slice());
        this.router.navigate(['/'])
    }

    setRecipies(recipies: Recipie[]) {
        this.recipies = recipies;
        this.recipiesUpdated.next(this.recipies.slice());
    }
}