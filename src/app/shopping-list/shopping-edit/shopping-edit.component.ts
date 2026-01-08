import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  indexOfIngredientToBeEdited!: number;
  ingredientToBeEdited!: Ingredient;
  @ViewChild('f') slForm!: NgForm;
  ingredientToBeEditedSubscription!: Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredientToBeEditedSubscription = this.shoppingListService.ingredientIndexToBeEdited.subscribe((index: number) => {
      this.indexOfIngredientToBeEdited = index;
      this.editMode = true;
      this.ingredientToBeEdited = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.ingredientToBeEdited.name,
        amount: this.ingredientToBeEdited.amount
      })
    })
  }
  onSubmittingRecipie(form: NgForm) {
    if (form.value.name && form.value.amount > 0)
      if (this.editMode) {
        this.shoppingListService.updateIngredient(this.indexOfIngredientToBeEdited, { name: form.value.name, amount: form.value.amount });
      } else {
        this.shoppingListService.addIngredient({ name: form.value.name, amount: form.value.amount });
      }
    this.editMode = false;
    this.slForm.reset();
  }

  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  deleteEntry() {
    this.shoppingListService.deleteIngredient(this.indexOfIngredientToBeEdited);
    this.clearForm();
  }
  ngOnDestroy(): void {
    this.ingredientToBeEditedSubscription.unsubscribe();
  }
}
