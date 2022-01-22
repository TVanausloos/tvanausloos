import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToolDetailItem } from '../../models/tool-detail-item';
import { ToolsService } from '../../service/tools.service';

@Component({
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  toolDetail$!: Observable<ToolDetailItem | undefined>;
  constructor(
    private toolService: ToolsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.toolDetail$ = this.activatedRoute.params.pipe(
      map((params) => params['id']),
      mergeMap((toolDetailId) =>
        this.toolService.getDetailItemById(toolDetailId)
      )
    );
  }
}
