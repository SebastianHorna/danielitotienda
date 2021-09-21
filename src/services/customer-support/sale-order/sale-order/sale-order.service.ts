import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleOrderModel } from '../../../../models/customer-support/sale-order/model.saleOrder';
import { fullUris } from './sale-order.keys';

@Injectable({
  providedIn: 'root',
})
export class SaleOrderService {
  private _fullUris = fullUris;
  _idSaleOrder: string = '';
  
  constructor(private http: HttpClient) {}

  create() {
    // console.log(this._fullUris)
    return this.http.post(this._fullUris._create, {});
  }

  take(_saleOrder: SaleOrderModel) {
    // console.log(this._fullUris)
    return this.http.put(this._fullUris._take, _saleOrder);
  }

  nonPaid() {
    // console.log(this._fullUris)
    return this.http.get(this._fullUris._nonPaid);
  }

  collect(_saleOrder: SaleOrderModel) {
    // console.log(this._fullUris)
    return this.http.put(this._fullUris._collect, _saleOrder);
  }

  paid() {
    // console.log(this._fullUris)
    return this.http.get(this._fullUris._paid);
  }

  read() {
    // console.log(this._fullUris)
    return this.http.get(this._fullUris._read);
  }
}
