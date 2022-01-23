import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToolSummaryItem } from '../../models/tool-summary-item';

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
}
