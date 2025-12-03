import { Component, EventEmitter, Output } from '@angular/core';
import { Recipie } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent {
  currentSelectedRecipie!: Recipie;
  onSelectingRecipie(recipie: Recipie) {
    this.currentSelectedRecipie = recipie;
  }
}
