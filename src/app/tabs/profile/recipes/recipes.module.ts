import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';
import {RecipeElementComponent} from "../../recipe-element/recipe-element.component";
import {TabsPageModule} from "../../tabs.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    TabsPageModule
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
