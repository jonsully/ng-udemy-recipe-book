import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  @Input() recipeData: Recipe;
  @Input() recipeIndex: number;

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    // this.route.params.subscribe((params: Params) => {});
    // this.route.snapshot.params['id'];
    // this.recipeService.activeRecipe = this.route.snapshot.params['id'];
  }
}
