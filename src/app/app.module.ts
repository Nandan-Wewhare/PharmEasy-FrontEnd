import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesbannersComponent } from './components/categoriesbanners/categoriesbanners.component';
import { CategoryTileComponent } from './components/category-tile/category-tile.component';
import { InfohomeComponent } from './components/infohome/infohome.component';
import { ChooseusComponent } from './components/chooseus/chooseus.component';
import { ChoosecardComponent } from './components/choosecard/choosecard.component';
import { ReviewhomeComponent } from './components/reviewhome/reviewhome.component';
import { ReviewcardComponent } from './components/reviewcard/reviewcard.component';
import { CategorydetailComponent } from './components/categorydetail/categorydetail.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    BannerComponent,
    CategoriesbannersComponent,
    CategoryTileComponent,
    InfohomeComponent,
    ChooseusComponent,
    ChoosecardComponent,
    ReviewhomeComponent,
    ReviewcardComponent,
    CategorydetailComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
