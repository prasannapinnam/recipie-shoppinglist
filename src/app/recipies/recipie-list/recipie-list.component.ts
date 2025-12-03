import { Component, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})
export class RecipieListComponent {
  recipies: Recipie[] =
    [new Recipie('pavbhaji', 'northindian snack', 'https://cdn.pixabay.com/photo/2024/06/03/10/18/bhaji-8806044_1280.jpg'),
    new Recipie('kadai-veg', 'northindian roti curry', 'https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043097_1280.jpg')];

  @Output('SelectedRecipie') SelectedRecipie = new EventEmitter<Recipie>();

  onSelectionOfRecipie(recipie: Recipie) {
    this.SelectedRecipie.emit(recipie);
  }
}