import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  ingredients: Ingredient[] = this.shoppingListService.getIngredients();
  @ViewChild('f', { static: false }) form: NgForm;
  editMode: boolean = false;
  activeIndex: number;
  editedItem: Ingredient;
  private ingredientEditSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientEditSub = this.shoppingListService.ingredientIndex.subscribe(
      (index) => {
        this.activeIndex = index;
        console.log(this.activeIndex);
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onDeleteIngredient() {
    if (this.editMode && confirm('Do you want to delete this ingredient?')) {
      this.shoppingListService.removeIngredient(this.activeIndex);
      this.clearIngredientFields();
    }
  }

  clearIngredientFields() {
    this.form.reset();
    this.editMode = false;
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.activeIndex,
        newIngredient
      );
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    form.reset();
  }
}
