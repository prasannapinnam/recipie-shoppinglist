import { Component, EventEmitter, Output } from '@angular/core';
import { Recipie } from './recipies.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent {
  currentSelectedRecipie: Recipie | undefined;

  constructor(private recipieService: RecipiesService) {
    this.recipieService.selectedRecipie.subscribe((recipie: Recipie) => {
      this.currentSelectedRecipie = recipie;
    })
  }

}
