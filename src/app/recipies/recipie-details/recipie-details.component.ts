import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipiesService } from '../recipies.service';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.scss']
})
export class RecipieDetailsComponent {
  @Input() selectedRecipie!: Recipie;

  constructor(private shoppingListService: ShoppingListService) {
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipie.ingredients);
  }

}
