import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SaleOrderService } from '../../../../services/customer-support/sale-order/sale-order/sale-order.service';
import { SaleOrderModel } from 'src/models/customer-support/sale-order/model.saleOrder';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(
    private _http: HttpClient,
    private _saleOrderService: SaleOrderService
  ) {
    console.log(this._saleOrderService._idSaleOrder);
  }

  ngOnInit(): void {}

  mainCreateSaleOrder() {}

  createSaleOrder() {
    // console.log('create',this._saleOrderService._idSaleOrder);
    // localStorage.setItem('_idSaleOrder', '6147f02075130212ac4800be');
    const _idSaleOrderLS = localStorage.getItem('_idSaleOrder');
    // console.log(_idSaleOrderLS, typeof _idSaleOrderLS)
    
    if (_idSaleOrderLS?.length === 0)
      this._saleOrderService.create().subscribe((resp) => {
        // console.log('go')
        const _idSaleOrder = JSON.parse(JSON.stringify(resp))._id;
        localStorage.setItem('_idSaleOrder', _idSaleOrder);
      });
    else console.log(_idSaleOrderLS);

    // if (!this._saleOrderService._idSaleOrder)
    //   this._saleOrderService
    //     .create()
    //     .subscribe(
    //       (resp) =>
    //         (this._saleOrderService._idSaleOrder = JSON.parse(
    //           JSON.stringify(resp)
    //         )._id)
    //     );
  }

  showID() {
    console.log(this._saleOrderService._idSaleOrder);
  }
}
