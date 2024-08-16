import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../../category";

@Component({
  selector: 'app-my-recipe-details',
  templateUrl: './my-recipe-details.page.html',
  styleUrls: ['./my-recipe-details.page.scss'],
})
export class MyRecipeDetailsPage implements OnInit {

  // @ts-ignore
  recipe:Recipe;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.recipe={id:paramMap.get('id')!!,authorId:'me',ingredients:'eoqhgoirgoipewrjogbire koregne\t lkqegherghje',instructions:'gqergergerwg',createdAt:new Date(),title:'Title',updatedAt: new Date(),category:Category.dinner}
    });
  }

  ngOnInit() {
  }

}
