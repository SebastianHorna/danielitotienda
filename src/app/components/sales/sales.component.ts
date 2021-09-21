import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClothesService } from 'src/app/services/clothes.service';
import { ClientService } from 'src/services/customer-support/sale-order/client/client.service';
import { SaleOrderService } from '../../../services/customer-support/sale-order/sale-order/sale-order.service';
import { DetailSaleOrderService } from '../../../services/customer-support/sale-order/detail-sale-order/detail-sale-order.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  // include a regex to have just the data 
  // avoiding the subscription in the component
  _detailSO: any = this._detailSOService.readByIdSaleOrder(
    '6147f02075130212ac4800be'
  )
  // .subscribe();
  
  // table column name
  _displayedColumnsDetailSO: string[] = [
    '_category',
    '_brand',
    '_size',
    '_price',
    '_amount',
    '_subtotal',
  ];

  constructor(
    private router: Router,
    public _clientService: ClientService,
    public _detailSOService: DetailSaleOrderService
  ) {
    console.log(this._detailSO)
  }

  ngOnInit(): void {}

  highlight(row: any, i: number) {
    this._detailSOService._selectedRowIndex = i;
    // console.log('FUCKKK UU ROWW', row);
  }

  searchClientRedirect() {
    this.router.navigate(['/search-client']);
  }

  salesDetailRedirect() {
    this.router.navigate(['/sales-detail']);
  }
}
