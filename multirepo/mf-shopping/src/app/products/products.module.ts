import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './../product-card/product-card.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProductCardComponent,
  ]
})
export class ProductsModule { }
