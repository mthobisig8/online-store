import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SingeItemComponent } from './singe-item/singe-item.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product', component: SingeItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
