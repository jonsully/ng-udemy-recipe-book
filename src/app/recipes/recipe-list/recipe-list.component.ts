import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  isActive: number;
  private isActiveSub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.isActiveSub = this.recipeService.activeRecipeEmitter.subscribe(
      (data) => {
        this.isActive = +data;
        console.log(this.isActive);
      }
    );
    // this.isActive = this.recipeService.activeRecipe;
    // console.log(this.isActive);
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   console.log(recipe);
    //   this.recipes = this.recipeService.getRecipes();
    // });
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
