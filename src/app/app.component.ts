import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedNav: string = 'Recipies'

  oncurrentNavChange(item: string) {
    this.selectedNav = item
  }
}
