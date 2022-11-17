import { Component, OnInit, NgModule } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
})
export class RecipeStartComponent implements OnInit {
  // recipeName: string = 'Hamburber';
  // recipeImage: string = 'image/path/';
  // recipeDescription: string =
  //   'This hamburber is smothered in a gravy made from bourbon and liquified ham. Hamburber.';
  // ingredients: Ingredient;
  // ingName: string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   console.log('The recipes component sez: ' + recipe);
    // });
  }

  // saveRecipe() {
  //   let ingredients: Ingredient;
  //   const recipe: Recipe = new Recipe(
  //     this.recipeName,
  //     this.recipeDescription,
  //     this.recipeImage,
  //     [{ name: 'Bread', amount: 1, unit: 'cup' }]
  //   );
  //   this.recipeService.addRecipe(recipe);
  // }
}
