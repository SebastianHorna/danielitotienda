import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductHeadquarterService } from 'src/services/product-management/distribution/product-headquarter/product-headquarter.service';
import { BrandService } from 'src/services/product-management/product/brand/brand.service';
import { CategoryService } from 'src/services/product-management/product/category/category.service';
import { SizeService } from 'src/services/product-management/product/size/size.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css'],
})
export class SalesDetailComponent implements OnInit {
  // for each headquarter u have specific products, so you need the id
  // headquarter then to get its products
  _idH: string = '6129c85483df9e42f027015a';

  //with these arrays will fill each selected html element
  //then user could choose one of them
  _sizes: any = [];
  _categories: any = [];
  _brands: any = [];

  // filter for the search
  _selectedSize: string = 'null';
  _selectedCategory: string = 'null';
  _selectedBrand: string = 'null';

  // result of the searching
  _products: any = [];

  // table column name
  _displayedColumns: string[] = ['_category', '_brand', '_size', '_stock'];

  // selected table row
  _selectedProduct: any;

  constructor(
    private router: Router,
    private _brandService: BrandService,
    private _categoryService: CategoryService,
    private _sizeService: SizeService,
    public _productHService: ProductHeadquarterService
  ) {
    this.startSelectors();
  }

  startSelectors() {
    this._brandService
      .readByHeadquarter(this._idH)
      .subscribe((_resultBrand) => {});
    this._categoryService
      .readByHeadquarter(this._idH)
      .subscribe((_resultBrand) => {
        this._categories = _resultBrand;
      });
    this._sizeService.readByHeadquarter(this._idH).subscribe((_resultBrand) => {
      this._sizes = _resultBrand;
    });
  }

  ngOnInit(): void {}

  _prepareSelectedCategory() {
    this._selectedCategory =
      this._selectedCategory === ''
        ? 'null'
        : this._selectedCategory === 'Categoria'
        ? 'null'
        : this._selectedCategory;
    if (this._selectedCategory === 'null') this._products = [];
  }

  _prepareSelectedBrand() {
    this._selectedBrand =
      this._selectedBrand === ''
        ? 'null'
        : this._selectedBrand === 'Marca'
        ? 'null'
        : this._selectedBrand;
    if (this._selectedBrand === 'null') this._products = [];
  }

  _prepareSelectedSize() {
    this._selectedSize =
      this._selectedSize === ''
        ? 'null'
        : this._selectedSize === 'Talla'
        ? 'null'
        : this._selectedSize;
    if (this._selectedSize === 'null') this._products = [];
  }

  _prepareAllSelecteds() {
    this._prepareSelectedCategory();
    this._prepareSelectedBrand();
    this._prepareSelectedSize();
    this._productHService._selectedRowIndex = -1
  }

  // each time user select a category, brand or size will get a
  // list of product through this function
  _fGetProducts() {
    this._prepareAllSelecteds();
    this._productHService
      .readByBrandCategorySize(
        this._idH,
        this._selectedBrand,
        this._selectedCategory,
        this._selectedSize
      )
      .subscribe((_resultProductH) => {
        this._products = _resultProductH;
        console.log(this._products);
        // this._selectedRowIndex =
      });
    console.log(
      'COMPONENT:',
      this._selectedBrand,
      this._selectedCategory,
      this._selectedSize
    );
  }

  _fSelectedCategory(_idCategory: string) {
    this._selectedCategory = _idCategory;
    this._fGetProducts();
    // console.log('Selected Category', _idCategory);
  }

  _fSelectedBrand(_idBrand: string) {
    this._selectedBrand = _idBrand;
    this._fGetProducts();
    // console.log('Selected Brand', _idBrand);
  }

  _fSelectedSize(_idSize: string) {
    this._selectedSize = _idSize;
    this._fGetProducts();
    // console.log('Selected Size', _idSize);
  }

  highlight(row: any, i: number) {
    this._productHService._selectedRowIndex = i;
    console.log('FUCKKK UU ROWW', row);
  }

  salesRedirect() {
    this.router.navigate(['/sales']);
  }
}
