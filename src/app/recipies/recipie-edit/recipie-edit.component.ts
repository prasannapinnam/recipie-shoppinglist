import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipiesService } from '../recipies.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipie } from '../recipies.model';

type IngredientForm = FormGroup<{
  name: FormControl<string>;
  amount: FormControl<number>;
}>;
@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.scss']
})
export class RecipieEditComponent implements OnInit {
  recipieEditMode!: boolean;
  recipieId!: number;
  recipieForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    imagePath: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    description: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    ingredients: new FormArray<IngredientForm>([])
  });
  constructor(private route: ActivatedRoute, private recipieService: RecipiesService, private router: Router) {
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.recipieEditMode = true;
        this.recipieId = params['id'];
        this.initRecipieForm();
      }
      else {
        this.recipieEditMode = false;
      }
    })
  }

  onSubmit() {
    if (this.recipieEditMode) {
      this.recipieService.updateRecipie(this.recipieId, this.recipieForm.getRawValue())
    }
    else {
      this.recipieService.addRecipie(this.recipieForm.getRawValue());
    }
    this.router.navigate(['../'], { relativeTo: this.route })
  }
  get ingredients() {
    return (<FormArray>this.recipieForm.get('ingredients')).controls;
  }
  initRecipieForm() {
    if (this.recipieEditMode) {
      const recipie = this.recipieService.getRecipie(this.recipieId);
      const ingredients = new FormArray<FormGroup>([]);

      if (recipie.ingredients) {
        for (let ingredient of recipie.ingredients) {
          ingredients.push(new FormGroup({
            name: new FormControl(ingredient.name, {
              validators: [Validators.required],
              nonNullable: true
            }),
            amount: new FormControl(ingredient.amount, {
              validators: [Validators.required, Validators.min(1)],
              nonNullable: true
            })
          }))
        }
      }

      this.recipieForm = new FormGroup({
        name: new FormControl(recipie.name, {
          validators: [Validators.required],
          nonNullable: true
        }),
        imagePath: new FormControl(recipie.imagePath, {
          validators: [Validators.required],
          nonNullable: true
        }),
        description: new FormControl(recipie.description, {
          validators: [Validators.required],
          nonNullable: true
        }),
        ingredients: ingredients
      })

    }
  }

  addIngredient() {
    (<FormArray>this.recipieForm.get('ingredients')).push(new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      amount: new FormControl(0, {
        validators: [Validators.required, Validators.min(1)],
        nonNullable: true
      })
    }))
  }

  removeIngredient(index: number) {
    (<FormArray>this.recipieForm.get('ingredients')).removeAt(index);
  }

}
