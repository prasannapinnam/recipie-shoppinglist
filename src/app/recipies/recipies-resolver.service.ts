import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipie } from "./recipies.model";
import { RecipiesService } from "./recipies.service";
import { DataStorageService } from './../shared/data-storage.service';

@Injectable({ providedIn: "root" })
export class RecipiesResolverService implements Resolve<Recipie[] | undefined> {

    constructor(private recipieService: RecipiesService, private dataStorageService: DataStorageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let recipies = this.recipieService.getRecipies();

        if (recipies.length === 0) {
            return this.dataStorageService.fetchRecipies();
        }
        else {
            return recipies;
        }

    }
}