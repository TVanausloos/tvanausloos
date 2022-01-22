import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableItemComponent } from './components/table-item/table-item.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { TableLegendComponent } from './components/table-legend/table-legend.component';
import { OverviewPage } from './page/overview-page/overview.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TableComponent,
    TableItemComponent,
    ItemDetailComponent,
    TableLegendComponent,
    OverviewPage,
  ],
  exports: [TableComponent, ItemDetailComponent],
  imports: [CommonModule, RouterModule],
})
export class ToolsModule {}
