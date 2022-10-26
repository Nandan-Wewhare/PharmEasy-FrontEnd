import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesbannersComponent } from './components/categoriesbanners/categoriesbanners.component';
import { InfohomeComponent } from './components/infohome/infohome.component';
import { ChooseusComponent } from './components/chooseus/chooseus.component';
import { ChoosecardComponent } from './components/choosecard/choosecard.component';
import { ReviewhomeComponent } from './components/reviewhome/reviewhome.component';
import { CategorydetailComponent } from './components/categorydetail/categorydetail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { AuthdialogComponent } from './components/authdialog/authdialog.component';
import { PincodedialogComponent } from './components/pincodedialog/pincodedialog.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './services/auth.guard';
import { FeatureBannerComponent } from './components/feature-banner/feature-banner.component';
import { SetAddressComponent } from './components/set-address/set-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    BannerComponent,
    InfohomeComponent,
    ChooseusComponent,
    ChoosecardComponent,
    ReviewhomeComponent,
    CategorydetailComponent,
    CategoriesbannersComponent,
    ProductComponent,
    ProductdetailComponent,
    AuthdialogComponent,
    PincodedialogComponent,
    CartComponent,
    FeatureBannerComponent,
    SetAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
