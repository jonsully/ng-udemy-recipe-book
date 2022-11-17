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
  @ViewChild('f') form: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onDeleteIngredient() {
    this.shoppingListService.removeIngredient();
  }

  clearIngredientFields() {
    this.form.reset();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount, '');
    this.shoppingListService.addIngredient(newIngredient);
  }
}
