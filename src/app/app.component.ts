import { Component, Input } from '@angular/core';
import { ShoppingListService } from './shared/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  @Input() routeOptions = {
    exact: true,
  };
  title = 'ng-udemy-recipe-book';
  currView: string = 'recipe';

  onViewChange(viewName: string) {
    this.currView = viewName;
  }
}
