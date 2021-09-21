import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesDetailComponent } from './components/sales-detail/sales-detail.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { PaySaleOrderComponent } from './components/pay-sale-order/pay-sale-order.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'sales-detail', component: SalesDetailComponent },
    { path: 'search-client', component: SearchClientComponent },
    { path: 'pay-sale-order', component: PaySaleOrderComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
