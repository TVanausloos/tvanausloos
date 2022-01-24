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
    'https://jasmine.github.io',
    'assets/logos/jasmine.svg',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Ka',
    'Karma',
    ToolCategory.UNIT_TEST,
    'https://karma-runner.github.io/latest/index.html',
    'assets/logos/karma.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Mo',
    'Mocha',
    ToolCategory.UNIT_TEST,
    'https://mochajs.org//index.html',
    'assets/logos/mocha.svg',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Je',
    'Jest',
    ToolCategory.UNIT_TEST,
    'https://jestjs.io',
    'assets/logos/jest.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Ac',
    'Angular Core',
    ToolCategory.COMPONENT_TEST,
    'https://angular.io/api/core/testing',
    'assets/logos/angular.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Tm',
    'Jest Timer Mocks',
    ToolCategory.COMPONENT_TEST,
    'https://jestjs.io/docs/timer-mocks',
    'assets/logos/jest.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Rm',
    'RxJs Marbles',
    ToolCategory.UNIT_TEST,
    'https://rxjs.dev/guide/testing/marble-testing',
    'assets/logos/rxjs.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Jm',
    'Jest Marbles',
    ToolCategory.UNIT_TEST,
    'https://www.npmjs.com/package/jest-marbles',
    'assets/logos/jest.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'St',
    'Stryker',
    ToolCategory.MUTATION_TEST,
    'https://stryker-mutator.io/docs',
    'assets/logos/stryker.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Cy',
    'Cypress',
    ToolCategory.E2E_TEST,
    'https://www.cypress.io',
    'assets/logos/cypress.webp',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Pw',
    'Playwright',
    ToolCategory.E2E_TEST,
    'https://playwright.dev/docs/intro',
    'assets/logos/playwright.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Pr',
    'Protractor',
    ToolCategory.E2E_TEST,
    '',
    'assets/logos/protractor.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Ps',
    'Playwright-Test-Snapshots',
    ToolCategory.VISUAL_REGRESSION_TEST,
    'https://playwright.dev/docs/test-snapshots',
    'assets/logos/playwright.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Pu',
    'Puppeteer',
    ToolCategory.VISUAL_REGRESSION_TEST,
    'https://pptr.dev',
    'assets/logos/puppeteer.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Cx',
    'Cypress Axe',
    ToolCategory.ACCESSIBILITY_TEST,
    'https://www.npmjs.com/package/cypress-axe',
    'assets/logos/cypress.webp',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Jx',
    'Jest Axe',
    ToolCategory.ACCESSIBILITY_TEST,
    'https://www.npmjs.com/package/jest-axe',
    'assets/logos/npm.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Rx',
    'RxJs',
    ToolCategory.LIBRARY,
    'https://rxjs.dev',
    'assets/logos/rxjs.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Nr',
    'NgRx',
    ToolCategory.LIBRARY,
    'https://ngrx.io',
    'assets/logos/ngrx.svg',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Ht',
    'HttpClient TestModule',
    ToolCategory.LIBRARY,
    'https://angular.io/api/common/http/testing/HttpClientTestingModule',
    'assets/logos/angular.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Js',
    'Jest AutoSpies',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/jest-auto-spies',
    'assets/logos/npm.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Nm',
    'NgMocks',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/ng-mocks',
    'assets/logos/npm.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Sp',
    'Spectator',
    ToolCategory.LIBRARY,
    'https://ngneat.github.io/spectator',
    'assets/logos/spectator.svg',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Tl',
    'Testing library',
    ToolCategory.LIBRARY,
    'https://testing-library.com',
    'assets/logos/testing-library.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Th',
    'Angular Test Harness',
    ToolCategory.LIBRARY,
    'https://material.angular.io/guide/using-component-harnesses',
    'assets/logos/angular-material.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Sb',
    'StoryBook',
    ToolCategory.LIBRARY,
    'https://storybook.js.org',
    'assets/logos/storybook.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Nx',
    'Nx Monorepo',
    ToolCategory.LIBRARY,
    'https://nx.dev',
    'assets/logos/nx.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'St',
    'SuperTest',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/supertest',
    'assets/logos/npm.png',
    '',
    [],
    [],
    []
  ),
  new ToolDetailItem(
    uuid(),
    'Ms',
    'MockServer',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/mock-server',
    'assets/logos/npm.png',
    '',
    [],
    [],
    []
  ),
];
