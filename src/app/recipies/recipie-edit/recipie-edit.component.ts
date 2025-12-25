import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.scss']
})
export class RecipieEditComponent {
  recipieEditMode!: boolean;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.recipieEditMode = true;
      }
      else {
        this.recipieEditMode = false;
      }
    })
  }

}
