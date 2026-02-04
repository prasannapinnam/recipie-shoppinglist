import { NgModule } from '@angular/core';
import { LoadingSpinner } from './loading-spinner/loading-spinner.component';
import { PlaceHolderDirective } from './placeholder/place-holder.directive';
import { DropDownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        LoadingSpinner,
        PlaceHolderDirective,
        DropDownDirective,
        AlertComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        LoadingSpinner,
        PlaceHolderDirective,
        DropDownDirective,
        AlertComponent,
        CommonModule
    ]
})
export class SharedModule{

}