import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';



@NgModule({
    declarations: [
        TableComponent,
        TableItemComponent,
        ItemDetailComponent
    ],
  exports: [
    TableComponent,
    ItemDetailComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ToolsModule { }
