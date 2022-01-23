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
  new ToolDetailItem(
    uuid(),
    'Tm',
    'Jest Timer Mocks',
    ToolCategory.COMPONENT_TEST,
    'https://jestjs.io/docs/timer-mocks',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Rm',
    'RxJs Marbles',
    ToolCategory.UNIT_TEST,
    'https://rxjs.dev/guide/testing/marble-testing',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Jm',
    'Jest Marbles',
    ToolCategory.UNIT_TEST,
    'https://www.npmjs.com/package/jest-marbles',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'St',
    'Stryker',
    ToolCategory.MUTATION_TEST,
    'https://stryker-mutator.io/docs/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Cy',
    'Cypress',
    ToolCategory.E2E_TEST,
    'https://www.cypress.io/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Pw',
    'Playwright',
    ToolCategory.E2E_TEST,
    'https://playwright.dev/docs/intro/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Pr',
    'Protractor',
    ToolCategory.E2E_TEST,
    '',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Ps',
    'Playwright-Test-Snapshots',
    ToolCategory.VISUAL_REGRESSION_TEST,
    'https://playwright.dev/docs/test-snapshots',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Pu',
    'Puppeteer',
    ToolCategory.VISUAL_REGRESSION_TEST,
    'https://pptr.dev/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Cx',
    'Cypress Axe',
    ToolCategory.ACCESSIBILITY_TEST,
    'https://www.npmjs.com/package/cypress-axe/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Jx',
    'Jest Axe',
    ToolCategory.ACCESSIBILITY_TEST,
    'https://www.npmjs.com/package/jest-axe',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Rx',
    'RxJs',
    ToolCategory.LIBRARY,
    'https://rxjs.dev/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'NgRx',
    'NgRx',
    ToolCategory.LIBRARY,
    'https://ngrx.io/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Ht',
    'HttpClient TestModule',
    ToolCategory.LIBRARY,
    'https://angular.io/api/common/http/testing/HttpClientTestingModule',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Js',
    'Jest AutoSpies',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/jest-auto-spies',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Nm',
    'NgMocks',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/ng-mocks',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Sp',
    'Spectator',
    ToolCategory.LIBRARY,
    'https://ngneat.github.io/spectator/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Tl',
    'Testing library',
    ToolCategory.LIBRARY,
    'https://testing-library.com/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Th',
    'Angular Test Harness',
    ToolCategory.LIBRARY,
    'https://material.angular.io/guide/using-component-harnesses',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Sb',
    'StoryBook',
    ToolCategory.LIBRARY,
    'https://storybook.js.org/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Nx',
    'Nx Monorepo',
    ToolCategory.LIBRARY,
    'https://nx.dev/',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'St',
    'SuperTest',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/supertest',
    'fake_location',
    ''
  ),
  new ToolDetailItem(
    uuid(),
    'Ms',
    'MockServer',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/mock-server',
    'fake_location',
    ''
  ),
];
