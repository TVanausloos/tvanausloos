import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolSummaryItem } from '../../models/tool-summary-item';
import * as lodash from 'lodash';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  summaryItems!: ToolSummaryItem[];

  @Output()
  itemSelect: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onSelect(item: ToolSummaryItem) {
    this.itemSelect.next(item.getId());
  }

  getItemClassName(selectedItem: ToolSummaryItem): string {
    const summaryItemsGroupedByCategory = lodash.groupBy(
      this.summaryItems,
      (item) => item.getCategory()
    );
    const indexOfSelectedItemInArrayOfItemsWithingSameCategory =
      summaryItemsGroupedByCategory[`${selectedItem.getCategory()}`].indexOf(
        selectedItem
      );
    return `${selectedItem.getCategory().toLocaleLowerCase()}${
      indexOfSelectedItemInArrayOfItemsWithingSameCategory + 1
    }`;
  }
}
