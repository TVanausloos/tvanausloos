import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewPage } from './tools/page/overview-page/overview.page';
import { DetailPage } from './tools/page/detail-page/detail.page';

const routes: Routes = [
  { path: '', redirectTo: 'frontend-landscape', pathMatch: 'full' },
  {
    path: 'frontend-landscape',
    component: OverviewPage,
    children: [
      { path: '', redirectTo: 'frontend-landscape/1', pathMatch: 'full' },
      { path: 'frontend-landscape/:id', component: DetailPage },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
