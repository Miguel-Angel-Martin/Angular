import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from 'app/components/products/add/add.component';
import { DetailComponent } from 'app/components/products/detail/detail.component';
import { ListComponent } from 'app/components/products/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Add', component: AddComponent },
      { path: 'List', component: ListComponent },
      { path: 'Detail', component: DetailComponent },
      { path: '**', redirectTo: 'List' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
