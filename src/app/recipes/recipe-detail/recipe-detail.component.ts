import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  sendToList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }
}
