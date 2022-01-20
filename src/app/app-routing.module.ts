import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './tools/components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'frontend-landscape/1', pathMatch: 'full' },
  { path: 'frontend-landscape/:id', component: ItemDetailComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
