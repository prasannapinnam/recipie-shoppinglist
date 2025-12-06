import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipiesService } from './../recipies.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [];


  constructor(private recipiesService: RecipiesService) { }

  ngOnInit(): void {
    this.recipies = this.recipiesService.getRecipies();
  }

}