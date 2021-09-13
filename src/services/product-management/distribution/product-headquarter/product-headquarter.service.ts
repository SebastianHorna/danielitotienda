import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHeadquarterModel } from '../../../../models/product-management/distribution/model.productHeadquarter';
import { fullUris } from './product-headquarter.keys';

@Injectable({
  providedIn: 'root',
})
export class ProductHeadquarterService {
  private _fullUris = fullUris;
  private _idHeadquarter = '';

  constructor(private http: HttpClient) {}

  create(_productH: ProductHeadquarterModel) {
    // console.log(this._fullUris)
    return this.http.post(this._fullUris._create, _productH);
  }

  red() {
    console.log(this._fullUris);
    return this.http.get(this._fullUris._read);
  }

  redFull(_idH: string) {
    // console.log(this._fullUris)
    const _redFullUri = this._fullUris._readFull + _idH;
    return this.http.get(_redFullUri);
  }
}
