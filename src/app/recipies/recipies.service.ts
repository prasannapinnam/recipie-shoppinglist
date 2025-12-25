import { Injectable } from "@angular/core";
import { Recipie } from "./recipies.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class RecipiesService {
    recipies: Recipie[] =
        [new Recipie('pavbhaji', 'northindian snack', 'https://cdn.pixabay.com/photo/2024/06/03/10/18/bhaji-8806044_1280.jpg',
            [new Ingredient('tomatoes', 8), new Ingredient('sweet-potatoes', 3)]),
        new Recipie('kadai-veg', 'northindian roti curry', 'https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043097_1280.jpg',
            [new Ingredient('cauliflower', 1), new Ingredient('green-peas', 20)]
        ),
        ];


    getRecipies() {
        return this.recipies.slice()
    }

}