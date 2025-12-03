import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('ingredientName') ingredientName!: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount!: ElementRef;
  @Output('newlyAddedIngredient') newlyAddedIngredient = new EventEmitter<Ingredient>();

  onAddingRecipie() {
    this.newlyAddedIngredient.emit({ name: this.ingredientName.nativeElement.value, amount: this.ingredientAmount.nativeElement.value });

  }
}
