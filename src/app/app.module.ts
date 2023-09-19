import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localEsMX from '@angular/common/locales/es-MX'
import localEsUS from '@angular/common/locales/en'
import localRussian from '@angular/common/locales/ru'
import { registerLocaleData } from '@angular/common'
// configuracin de la app

registerLocaleData(localEsMX)
registerLocaleData(localEsUS)
registerLocaleData(localRussian)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    ProductsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
