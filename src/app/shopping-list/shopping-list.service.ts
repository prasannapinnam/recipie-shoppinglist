import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredients: Ingredient[] = [new Ingredient('pepper', 20), new Ingredient('salt', 1)];

    changedIngredients = new Subject<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.changedIngredients.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this.ingredients.push(ingredient);
        }
        this.changedIngredients.next(this.ingredients);
        console.log(this.ingredients);
    }

    getIngredients() {
        return this.ingredients.slice();
    }

}