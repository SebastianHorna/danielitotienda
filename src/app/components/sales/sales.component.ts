import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClothesService } from 'src/app/services/clothes.service';
import { SaleOrderService } from '../../../services/customer-support/sale-order/sale-order/sale-order.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class SalesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchClientRedirect() {
    this.router.navigate(['/search-client']);
  }

  salesDetailRedirect() {
    this.router.navigate(['/sales-detail']);
  }
}
