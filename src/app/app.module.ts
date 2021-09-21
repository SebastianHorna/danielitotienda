import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Routes
import { APP_ROUTING } from './app.routes';

//Modules
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SalesComponent } from './components/sales/sales.component';
import { SalesDetailComponent } from './components/sales-detail/sales-detail.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { RegisterModifyClientComponent } from './components/Modal/register-modify-client/register-modify-client.component';
import { PaySaleOrderComponent } from './components/pay-sale-order/pay-sale-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SalesComponent,
    SalesDetailComponent,
    SearchClientComponent,
    RegisterModifyClientComponent,
    PaySaleOrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
