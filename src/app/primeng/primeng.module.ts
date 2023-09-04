import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimengModule { }
