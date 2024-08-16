import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../recipe.model";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes:Recipe[];
  constructor(private modalController:ModalController,private router:Router) {
    this.recipes=[{id:'1',authorId:'',title:'',category:'',updatedAt:new Date(),createdAt:new Date(),instructions:"",ingredients:''}];
  }

  ngOnInit() {
  }

}
