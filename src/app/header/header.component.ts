import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navSections = ['Recipies', 'ShoppingList'];
  @Output('currentNavSection') currentNavSection = new EventEmitter<string>();

  setNavItem(item: string) {
    this.currentNavSection.emit(item);
  }
}
