import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClothesService } from 'src/app/services/clothes.service';
import { ClientService } from 'src/services/customer-support/sale-order/client/client.service';
import { SaleOrderService } from '../../../services/customer-support/sale-order/sale-order/sale-order.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  constructor(private router: Router, public _clientService: ClientService) {}

  ngOnInit(): void {}

  searchClientRedirect() {
    this.router.navigate(['/search-client']);
  }

  salesDetailRedirect() {
    this.router.navigate(['/sales-detail']);
  }
  h(){
    console.log(this._clientService._client)
  }
}
