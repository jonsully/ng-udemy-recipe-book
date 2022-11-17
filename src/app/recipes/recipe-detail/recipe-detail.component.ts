import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeDetails: Recipe;
  recipeDetails: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetails = this.recipeService.getRecipeDetail(params.id);
      this.recipeService.activeRecipeEmitter.next(params.id);
    });
  }

  sendToList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }
  onRecipeEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
