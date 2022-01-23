import { Component, Input, OnInit } from '@angular/core';
import { ToolSummaryItem } from '../../models/tool-summary-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  summaryItems!: ToolSummaryItem[];

  constructor() {}

  ngOnInit(): void {}
}
