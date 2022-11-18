import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  activeItem: number;
  private shoppingListSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListSub =
      this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
        this.ingredients = ingredients;
      });
  }

  onEditItem(index: number) {
    // console.log(this.ingredients[index]);
    this.activeItem = index;
    // const selectedIngredient: Ingredient = this.ingredients[index];
    this.shoppingListService.ingredientIndex.next(index);
  }

  ngOnDestroy() {
    // this.shoppingListSub.unsubscribe();
  }
}
