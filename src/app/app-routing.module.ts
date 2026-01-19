import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { NoRecipieComponent } from './recipies/no-recipie/no-recipie.component';
import { RecipiesResolverService } from './recipies/recipies-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipies', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'recipies', component: RecipiesComponent, canActivate: [AuthGuard], children: [
      { path: '', component: NoRecipieComponent },
      { path: 'new', component: RecipieEditComponent },
      { path: ':id', component: RecipieDetailsComponent, resolve: [RecipiesResolverService] },
      { path: ':id/edit', component: RecipieEditComponent, resolve: [RecipiesResolverService] },
    ]
  },
  { path: 'auth', component: AuthComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
