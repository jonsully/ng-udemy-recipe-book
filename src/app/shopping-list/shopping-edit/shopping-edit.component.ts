import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredients: Ingredient[] = this.shoppingListService.getIngredients();
  @ViewChild('f') ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.log(this.ingredientForm);
  }

  // onAddIngredient() {
  //   const ingName = this.theName.nativeElement.value;
  //   const ingAmount = this.theAmount.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount, '');
  //   this.shoppingListService.addIngredient(newIngredient);
  //   console.log(this.shoppingListService.ingredients);
  // }

  onDeleteIngredient() {
    this.shoppingListService.removeIngredient();
  }

  clearIngredientFields() {
    this.ingredientForm.reset();
  }

  onSubmit(data: FormData) {
    const ingName = this.ingredientForm.value.name;
    const ingAmount = this.ingredientForm.value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount, '');
    this.shoppingListService.addIngredient(newIngredient);
  }
}
