import { Component, Input, OnInit } from '@angular/core';
import { ToolDetailItem } from '../../models/tool-detail-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  @Input()
  item!: ToolDetailItem;

  constructor() {}

  ngOnInit(): void {}
}
