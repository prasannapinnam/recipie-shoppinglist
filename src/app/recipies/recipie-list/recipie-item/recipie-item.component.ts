import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipie } from './../../recipies.model';
import { RecipiesService } from '../../recipies.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss']
})
export class RecipieItemComponent {
  @Input('RecipieItem') RecipieItem!: Recipie;

  constructor(private recipieService: RecipiesService) { }
  onClickOfRecipie() {
    this.recipieService.selectedRecipie.next(this.RecipieItem);
  }
}
