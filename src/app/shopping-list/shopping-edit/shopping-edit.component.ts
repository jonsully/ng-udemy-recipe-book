import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[] = this.shoppingListService.getIngredients();

  @ViewChild('ingredientName') theName: ElementRef;
  @ViewChild('ingredientAmount') theAmount: ElementRef;

  ngOnInit(): void {}

  onAddIngredient() {
    const ingName = this.theName.nativeElement.value;
    const ingAmount = this.theAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, '');
    this.shoppingListService.addIngredient(newIngredient);
    console.log(this.shoppingListService.ingredients);
  }

  onDeleteIngredient() {
    this.shoppingListService.removeIngredient();
  }

  clearIngredientFields() {
    const ingName = (this.theName.nativeElement.value = '');
    const ingAmount = (this.theAmount.nativeElement.value = '');
  }
}
