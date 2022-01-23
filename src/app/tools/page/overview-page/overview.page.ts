import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../../service/tools.service';
import { Observable } from 'rxjs';
import { ToolSummaryItem } from '../../models/tool-summary-item';
import { Router } from '@angular/router';

@Component({
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  toolSummaries$!: Observable<ToolSummaryItem[]>;

  constructor(private toolService: ToolsService, private router: Router) {}

  ngOnInit(): void {
    this.toolSummaries$ = this.toolService.getSummaryItems();
  }

  onItemSelect(itemId: string) {
    this.router.navigateByUrl(`frontend-landscape/${itemId}`);
  }
}
