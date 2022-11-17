import { Component, OnInit, NgModule } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipeName: string;
  recipeImage: string;
  recipeDescription: string;
  ingredients: Ingredient[];
  id: number;
  editMode = false;

  @ViewChild('ingredientName') theName: ElementRef;
  @ViewChild('ingredientAmount') theAmount: ElementRef;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this subscribe pattern seems to be preferred by instructor
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      if (this.editMode) {
        console.log('You are editing a recipe');
        const recipe = this.recipeService.getRecipeDetail(this.id);
        this.recipeName = recipe.name;
        this.recipeDescription = recipe.description;
        this.recipeImage = recipe.imagePath;
        this.ingredients = recipe.ingredients;
      } else {
        console.log('this is a new recipe');
      }
    });
  }

  saveRecipe() {
    let ingredients: Ingredient;
    const recipe: Recipe = new Recipe(
      this.recipeName,
      this.recipeDescription,
      this.recipeImage,
      [{ name: 'Bread', amount: 1, unit: 'cup' }]
    );
    this.recipeService.addRecipe(recipe);
  }
}
