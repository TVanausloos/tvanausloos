import { Injectable } from '@angular/core';
import { ToolSummaryItem } from '../models/tool-summary-item';
import { Observable, of } from 'rxjs';
import { ToolDetailItem } from '../models/tool-detail-item';
import { ToolCategory } from '../models/tool-category';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  getSummaryItems(): Observable<ToolSummaryItem[]> {
    return of(
      toolDetailItems?.map(
        (detailItem) =>
          new ToolSummaryItem(
            detailItem.getId(),
            detailItem.getAbbreviation(),
            detailItem.getName(),
            detailItem.getCategory()
          )
      ) ?? []
    );
  }

  getDetailItemById(id: string): Observable<ToolDetailItem | undefined> {
    return of(toolDetailItems.find((item) => item.getId() === id));
  }
}

const toolDetailItems: ToolDetailItem[] = [
  new ToolDetailItem(
    '1',
    'Ja',
    'Jasmine',
    ToolCategory.UNIT_TEST,
    'https://jasmine.github.io/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    '2',
    'Ka',
    'Karma',
    ToolCategory.UNIT_TEST,
    'https://karma-runner.github.io/latest/index.html/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    '3',
    'Mo',
    'Mocha',
    ToolCategory.UNIT_TEST,
    'https://mochajs.org//index.html/',
    'fake_location',
    ''
  ),

  new ToolDetailItem(
    '4',
    'Je',
    'Jest',
    ToolCategory.UNIT_TEST,
    'https://jestjs.io/',
    'fake_location',
    ''
  ),
];
