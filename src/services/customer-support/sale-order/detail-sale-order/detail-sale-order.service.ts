import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailSaleOrderModel } from '../../../../models/customer-support/sale-order/model.detailSaleOrder';
import { fullUris } from './detail-sale-order.keys';

@Injectable({
  providedIn: 'root',
})
export class DetailSaleOrderService {
  private _fullUris = fullUris;
  _amount = 0;
  _selectedRowIndex: number = -1;

  _detailSO = []

  constructor(private http: HttpClient) {}

  create(_detailSO: DetailSaleOrderModel) {
    // console.log(this._fullUris)
    // console.log('detail-sale-order-create')
    console.log(_detailSO);
    return this.http.post(this._fullUris._create, _detailSO);
  }

  update(_detailSO: DetailSaleOrderModel) {
    // console.log(this._fullUris)
    return this.http.put(this._fullUris._update, _detailSO);
  }

  readByIdSaleOrder(_idSaleOrder: string) {
    // console.log(this._fullUris)
    const _redByIdUri = this._fullUris._readById + _idSaleOrder;
    return this.http.get(_redByIdUri);
  }


  //FUNCTIONS: Modifying global values
  // addDetailSO(){
  //   this._detailSO.push(detailSO)
  // }
  
  // resetDetailSO(){
  //   this._detailSO = []
  // }

}
