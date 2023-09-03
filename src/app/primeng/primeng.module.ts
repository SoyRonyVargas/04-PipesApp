import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenuModule,
    MenubarModule
  ]
})
export class PrimengModule { }
