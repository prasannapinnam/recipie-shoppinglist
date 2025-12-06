import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.scss']
})
export class RecipieDetailsComponent {
  @Input() selectedRecipie!: Recipie;

  constructor() {

  }

}
