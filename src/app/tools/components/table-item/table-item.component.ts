import { Component, Input, OnInit } from '@angular/core';
import { ToolSummaryItem } from '../../models/tool-summary-item';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent implements OnInit {
  @Input()
  summaryItem!: ToolSummaryItem;

  @Input()
  classname!: string;

  constructor() {}

  ngOnInit(): void {}
}
