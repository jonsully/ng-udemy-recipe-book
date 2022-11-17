import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Salt', 1 / 4, 'tsp'),
    new Ingredient('Apples', 3, ''),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  // ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient() {
    this.ingredients.splice(0, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
