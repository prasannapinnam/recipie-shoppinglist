import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from './../shared/shared.module';

const appRoutes: Routes = [
    { path: '', component: ShoppingListComponent },

]

@NgModule({
    imports: [RouterModule.forChild(appRoutes), SharedModule],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}