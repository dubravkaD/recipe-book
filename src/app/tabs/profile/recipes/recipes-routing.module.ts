import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  }
  /*{
    path: ':id',
    loadChildren: () => import('./my-recipe-details/my-recipe-details.module').then( m => m.MyRecipeDetailsPageModule)
  }*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
