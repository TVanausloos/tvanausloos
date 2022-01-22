import { Injectable } from '@angular/core';
import { ToolSummaryItem } from '../models/tool-summary-item';
import { Observable, of } from 'rxjs';
import { ToolDetailItem } from '../models/tool-detail-item';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  getSummaryItems(): Observable<ToolSummaryItem[]> {
    return of(toolSummaryItems);
  }

  getDetailItemById(id: string): ToolDetailItem | undefined {
    return toolDetailItems.find((item) => item.getId() === id);
  }
}

const toolSummaryItems: ToolSummaryItem[] = [];
const toolDetailItems: ToolDetailItem[] = [];
