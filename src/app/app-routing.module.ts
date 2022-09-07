import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorydetailComponent } from './components/categorydetail/categorydetail.component';
import { HomeComponent } from './components/home/home.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: CategorydetailComponent },
  { path: 'product/:id', component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
