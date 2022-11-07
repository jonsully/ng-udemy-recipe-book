import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  paramsSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  @Input() recipeData: Recipe;
  @Input() recipeIndex: number;

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {});
    console.log(this.recipeData);
    // this.route.snapshot.params['id'];
    // console.log(this.route.snapshot.params['id']);
  }

  // onSelected(id) {
  //   // this.recipeService.recipeSelected.emit(this.recipeData);
  //   // this.route.snapshot.params['id'];
  //   // console.log(this.recipeService.getRecipeDetail(id));
  // }

  // testClick() {
  //   console.log('Clicked item ' + this.recipeID);
  // }
}
