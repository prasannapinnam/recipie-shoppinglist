import { Component, EventEmitter, OnDestroy, Output, OnInit } from '@angular/core';
import { DataStorageService } from './../shared/data-storage.service';
import { Recipie } from '../recipies/recipies.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }
  isAuthenticated = false;
  userSub!: Subscription;
  navSections = [{ section: 'recipies', status: this.isAuthenticated }, { section: 'shopping-list', status: !this.isAuthenticated }, { section: 'auth', status: !this.isAuthenticated }];

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false
    })
  }

  onSaveData() {
    this.dataStorageService.storeRecipies();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipies().subscribe((recipies: Recipie[]) => { });
  }

  onLogOut() {
    this.authService.logOut();
  }

  ngOnDestroy(): void {

  }
}
