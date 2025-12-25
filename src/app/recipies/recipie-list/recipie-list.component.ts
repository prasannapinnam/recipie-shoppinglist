import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipiesService } from './../recipies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [];


  constructor(private recipiesService: RecipiesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipies = this.recipiesService.getRecipies();
  }
  addingNewRecipie() {
    this.router.navigate(['/recipies', 'new'])
  }

}