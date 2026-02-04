import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipiesComponent } from "./recipies.component";
import { AuthGuard } from "../auth/auth.guard";
import { NoRecipieComponent } from "./no-recipie/no-recipie.component";
import { RecipieEditComponent } from "./recipie-edit/recipie-edit.component";
import { RecipieDetailsComponent } from "./recipie-details/recipie-details.component";
import { RecipiesResolverService } from "./recipies-resolver.service";

const appRoutes: Routes = [
    {
        path: '', component: RecipiesComponent, canActivate: [AuthGuard], children: [
            { path: '', component: NoRecipieComponent },
            { path: 'new', component: RecipieEditComponent },
            { path: ':id', component: RecipieDetailsComponent, resolve: [RecipiesResolverService] },
            { path: ':id/edit', component: RecipieEditComponent, resolve: [RecipiesResolverService] },
        ]
    },
]
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class RecipieRoutingModule {

}