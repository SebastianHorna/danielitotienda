import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { fullUris } from './price.keys';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  // private _idHeadquarter: string = '6129c85483df9e42f027015a';
  private _fullUris = fullUris;
  _selectedRowIndex: number = -1;

  constructor(private http: HttpClient) {}

  readFullPricesByIdProduct(_idProduct: string) {
    const _uri = this._fullUris._FullPricesByIdProduct(_idProduct);
    return this.http.get(_uri);
    // console.log(_idProduct);
  }
}
