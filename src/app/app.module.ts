import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';

import {MatCardModule}from '@angular/material/card';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { CreateComponent } from './components/products/create/create.component';

import {MatButtonModule}from '@angular/material/button';
import {MatSnackBarModule}from '@angular/material/snack-bar';

import {HttpClientModule} from '@angular/common/http'

import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ReadComponent } from './components/products/read/read.component';
import { Read2Component } from './components/products/read2/read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { UpdateComponent } from './components/products/update/update.component';
import { DeleteComponent } from './components/products/delete/delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    RedDirective,
    ForDirective,
    CreateComponent,
    ReadComponent,
    Read2Component,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'pt-br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
