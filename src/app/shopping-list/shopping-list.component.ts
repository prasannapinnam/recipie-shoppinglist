import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    ingredients!: Ingredient[];

    constructor(private shoppingListService: ShoppingListService, private router: Router) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.changedIngredients.subscribe((ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
        })
    }

}
