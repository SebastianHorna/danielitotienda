import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html'
})
export class SalesDetailComponent implements OnInit {

  Clothesre    : any[] = [];
  sizes        : any[] = [];
  categories   : any[] = [];
  brands       : any[] = [];

  categoryId : string = "";
  brandId    : string = "";
  sizeId     : string = "";

  constructor( private _clothesService : ClothesService, private router : Router) { 
    this.sizes = this._clothesService.getSizes();
    this.categories = this._clothesService.getCategories();
    this.brands = this._clothesService.getBrands();
    this.Clothesre = this._clothesService.getClothes();
  }

  ngOnInit(): void {
  }

  
  selectCategory( value : any ){
    this.categoryId = value.target.value;
    console.log(this.categoryId);
    this.Clothesre = this._clothesService.getClothesByCategory(this.categoryId);
    console.log(this.Clothesre);
  }

  // selectBrand( value : string ){

  // }

  // selectSize( value : string ){

  // }
  salesRedirect(){
    this.router.navigate( ['/sales'] );
  }

}
