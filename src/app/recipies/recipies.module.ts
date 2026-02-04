import { NgModule } from "@angular/core";
import { RecipiesComponent } from "./recipies.component";
import { RecipieListComponent } from "./recipie-list/recipie-list.component";
import { RecipieDetailsComponent } from "./recipie-details/recipie-details.component";
import { RecipieItemComponent } from "./recipie-list/recipie-item/recipie-item.component";
import { RecipieEditComponent } from "./recipie-edit/recipie-edit.component";
import { NoRecipieComponent } from "./no-recipie/no-recipie.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipieRoutingModule } from "./recipie-routing.module";
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        RecipiesComponent,
        RecipieListComponent,
        RecipieDetailsComponent,
        RecipieItemComponent,
        RecipieEditComponent,
        NoRecipieComponent
    ],
    exports: [
    ],
    imports: [
    RouterModule,
        ReactiveFormsModule,
        RecipieRoutingModule,
        SharedModule
    ]
})
export class RecipiesModule {

}