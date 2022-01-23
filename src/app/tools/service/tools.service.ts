import { Injectable } from '@angular/core';
import { ToolSummaryItem } from '../models/tool-summary-item';
import { Observable, of } from 'rxjs';
import { ToolDetailItem } from '../models/tool-detail-item';
import { ToolCategory } from '../models/tool-category';
import { v4 as uuid } from 'uuid';

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
    uuid(),
    'Ja',
    'Jasmine',
    ToolCategory.UNIT_TEST,
    'https://jasmine.github.io/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Ka',
    'Karma',
    ToolCategory.UNIT_TEST,
    'https://karma-runner.github.io/latest/index.html/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Mo',
    'Mocha',
    ToolCategory.UNIT_TEST,
    'https://mochajs.org//index.html/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Je',
    'Jest',
    ToolCategory.UNIT_TEST,
    'https://jestjs.io/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Ac',
    'Angular Core',
    ToolCategory.COMPONENT_TEST,
    'https://angular.io/api/core/testing',
    'fake_location',
    ''
  ),
];
