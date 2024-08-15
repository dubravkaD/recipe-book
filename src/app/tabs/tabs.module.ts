import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {RecipeElementComponent} from "./recipe-element/recipe-element.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipeElementComponent
  ],
  declarations: [TabsPage, RecipeElementComponent]
})
export class TabsPageModule {}
