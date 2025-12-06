import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientName!: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount!: ElementRef;
  @Output('newlyAddedIngredient') newlyAddedIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }
  onAddingRecipie() {
    if (this.ingredientName.nativeElement.value && this.ingredientAmount.nativeElement.value > 0)
      this.shoppingListService.addIngredient({ name: this.ingredientName.nativeElement.value, amount: this.ingredientAmount.nativeElement.value });
  }
}
