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
  
  createSaleOrder() {
    console.log('create',this._saleOrderService._idSaleOrder);
    if (!this._saleOrderService._idSaleOrder)
      this._saleOrderService
        .create()
        .subscribe(
          (resp) =>
            (this._saleOrderService._idSaleOrder = JSON.parse(
              JSON.stringify(resp)
            )._id)
        );
  }
  
  showID() {
    console.log(this._saleOrderService._idSaleOrder);
  }
}
