import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from './../shared/data-storage.service';
import { Recipie } from '../recipies/recipies.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) { }
  navSections = ['recipies', 'shopping-list'];

  onSaveData() {
    this.dataStorageService.storeRecipies();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipies().subscribe((recipies: Recipie[]) => { });
  }
}
