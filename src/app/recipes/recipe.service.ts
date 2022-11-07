import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1, 'BURGER', 'Burger with cheese', 'assets/recipe.png', [
      new Ingredient('Bread', 1, ''),
      new Ingredient('Meat', 1, ''),
      new Ingredient('Cheese', 1, ''),
    ]),
    new Recipe(
      2,
      'A Test Recipe 2',
      'This is another test',
      'assets/recipe.png',
      [
        { name: 'fignut', amount: 2, unit: 'cups' },
        { name: 'bread', amount: 2, unit: 'cups' },
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }

  getRecipeDetail(id) {
    return this.recipes.slice(id);
  }
}
