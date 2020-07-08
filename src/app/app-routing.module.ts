import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { ShopComponent } from './shop/shop.component';
import { MedicineComponent } from './medicine/medicine.component';


const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"addmedicine",component:AddmedicineComponent},
  {path:"shop",component:ShopComponent},
  {path:"shop/medicine/:k",component:MedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
