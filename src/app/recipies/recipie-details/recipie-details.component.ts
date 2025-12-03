import { Component, Input } from '@angular/core';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.scss']
})
export class RecipieDetailsComponent {
  @Input('selectedRecipie') selectedRecipie!: Recipie;
}
