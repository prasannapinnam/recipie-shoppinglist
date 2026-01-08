import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.scss']
})
export class RecipieDetailsComponent implements OnInit {
  selectedRecipie!: Recipie;
  recipieId!: number;
  recipies!: Recipie[];

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute,
    private recipiesService: RecipiesService, private router: Router) {
  }

  ngOnInit(): void {
    this.recipies = this.recipiesService.getRecipies();

    this.route.params.subscribe((params: Params) => {
      this.selectedRecipie = this.recipies[params['id']],
        this.recipieId = +params['id'];
    })
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipie.ingredients);
  }

  deleteRecipie() {
    this.recipiesService.deleteRecipie(this.recipieId);
  }

}
