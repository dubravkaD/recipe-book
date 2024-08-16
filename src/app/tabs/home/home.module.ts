import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {RecipeElementComponent} from "../recipe-element/recipe-element.component";
import {TabsPageModule} from "../tabs.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TabsPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
