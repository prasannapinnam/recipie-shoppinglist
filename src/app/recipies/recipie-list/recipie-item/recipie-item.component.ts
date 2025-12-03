import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipie } from './../../recipies.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent {
  @Input('RecipieItem') RecipieItem!: Recipie;
  @Output('selectedRecipie') selectedRecipie = new EventEmitter<Recipie>();

  onClickOfRecipie() {
    this.selectedRecipie.emit(this.RecipieItem);
  }
}
