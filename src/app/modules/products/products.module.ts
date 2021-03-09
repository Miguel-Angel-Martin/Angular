import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ListComponent } from '../../components/products/list/list.component';
import { AddComponent } from '../../components/products/add/add.component';
import { DetailComponent } from '../../components/products/detail/detail.component';
import { MaterialModules } from '../../modules/material.module';
@NgModule({
  declarations: [ListComponent, AddComponent, DetailComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModules],
})
export class ProductsModule {}
