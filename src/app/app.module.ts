import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FilterByPricePipe } from './filter-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddmedicineComponent,
    HomeComponent,
    ShopComponent,
    MedicineComponent,
    FilterByPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
