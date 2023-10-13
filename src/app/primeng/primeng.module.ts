import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    PanelModule,
    SplitButtonModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimengModule { }
