import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    ingredients: Ingredient[] = [new Ingredient('pepper', 20), new Ingredient('salt', 1)];

    changedIngredients = new Subject<Ingredient[]>();
    ingredientIndexToBeEdited = new Subject<number>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.changedIngredients.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this.ingredients.push(ingredient);
        }
        this.changedIngredients.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.changedIngredients.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.changedIngredients.next(this.ingredients.slice());
    }

}