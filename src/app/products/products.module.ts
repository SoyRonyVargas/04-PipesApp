import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { NgModule } from '@angular/core';
import { CustomPipesComponent } from './pages/custom-pipes/custom-pipes.component';
import { CommonModule } from '@angular/common';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule
  ],
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    CustomPipesComponent,
    ToggleCasePipe
  ]
})
export class ProductsModule { }
