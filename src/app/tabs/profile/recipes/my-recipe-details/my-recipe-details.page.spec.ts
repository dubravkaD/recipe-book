import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyRecipeDetailsPage } from './my-recipe-details.page';

describe('MyRecipeDetailsPage', () => {
  let component: MyRecipeDetailsPage;
  let fixture: ComponentFixture<MyRecipeDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecipeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
