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
    [],
    [],
    ['Assertion library', 'Default packaged with Angular']
  ),
  new ToolDetailItem(
    uuid(),
    'Ka',
    'Karma',
    ToolCategory.UNIT_TEST,
    'https://karma-runner.github.io/latest/index.html',
    'assets/logos/karma.png',
    [
      'Framework/testing library agnostic',
      'Already configured so if you dont need anything special, you can use the default setup',
    ],
    ['Can not run test in parallel'],
    [
      'Testrunner',
      'Comes with a default reporter, but you can also configure one yourself.',
      'Makes use of the actual browser to run its tests',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Mo',
    'Mocha',
    ToolCategory.UNIT_TEST,
    'https://mochajs.org//index.html',
    'assets/logos/mocha.svg',
    ['Can run tests in parallel as of version 8.0', 'Has a watch-mode'],
    ['No parallel tests prior to version 8.0'],
    ['Makes use of the actual browser to run its tests', 'Uses Karma as runner']
  ),
  new ToolDetailItem(
    uuid(),
    'Je',
    'Jest',
    ToolCategory.UNIT_TEST,
    'https://jestjs.io',
    'assets/logos/jest.png',
    [
      'Can run tests in parallel',
      'Does not use the browser but uses jsdom to emulate a browser -> fast!',
      'Good working watch-mode',
      'Offers features for mocking, code-coverage, async tests, ..',
    ],
    [
      'Does not use the browser -> lacks localstorage, sessionstorage and locales',
    ],
    [
      'Can easily be added to angular by a schematic',
      'Does not use the actual browser',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Tm',
    'Jest Timer Mocks',
    ToolCategory.UNIT_TEST,
    'https://jestjs.io/docs/timer-mocks',
    'assets/logos/jest.png',
    [],
    [],
    [
      'Gives us mock functions to control the passing of time in native timer functions such as setTimeout()',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Ac',
    'Angular Core',
    ToolCategory.UNIT_TEST,
    'https://angular.io/api/core/testing',
    'assets/logos/angular.png',
    [
      'fakeAsync treats our code as if it were synchronous, allowing us to write a more traditional given-when-then tests!',
    ],
    [
      'waitForAsync has access to all our tests -> in order to not have weird behavior we have to wrap ALL our tests with this!',
    ],
    ['Brings us "waitForAsync" and "fakeAsync" to wrap around our tests']
  ),
  new ToolDetailItem(
    uuid(),
    'Rm',
    'RxJs Marbles',
    ToolCategory.UNIT_TEST,
    'https://rxjs.dev/guide/testing/marble-testing',
    'assets/logos/rxjs.png',
    ['Very usefull to test complex reactive operations'],
    [],
    ['Test rxjs code by describing the different input and output streams']
  ),
  new ToolDetailItem(
    uuid(),
    'Th',
    'Angular Test Harness',
    ToolCategory.COMPONENT_TEST,
    'https://material.angular.io/guide/using-component-harnesses',
    'assets/logos/angular-material.png',
    ['Is included in Angular Material'],
    [],
    [
      'Makes a test-abstraction from your components -> a bit like page objects do',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Sp',
    'Spectator',
    ToolCategory.COMPONENT_TEST,
    'https://ngneat.github.io/spectator',
    'assets/logos/spectator.svg',
    [
      'Removes boilerplate code',
      'No testbed setup needed',
      'Has features to interact with DOM elements and for async testing',
    ],
    [],
    [
      'Helps with the test-setup for testing components, directives, services and more',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Tl',
    'Testing library',
    ToolCategory.COMPONENT_TEST,
    'https://testing-library.com',
    'assets/logos/testing-library.png',
    [
      'Accessiblility testing is included by default!',
      'Focussed on interacting with your components the way a user would',
    ],
    [],
    [
      'Familly of testing libraries to test our components without having to know the implementation details',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Jm',
    'Jest Marbles',
    ToolCategory.UNIT_TEST,
    'https://www.npmjs.com/package/jest-marbles',
    'assets/logos/jest.png',
    [],
    [],
    ['RxJs marbles that works specifically with Jest']
  ),
  new ToolDetailItem(
    uuid(),
    'St',
    'Stryker',
    ToolCategory.MUTATION_TEST,
    'https://stryker-mutator.io/docs',
    'assets/logos/stryker.png',
    [],
    [],
    ['Mutates the sourcecode and expects the tests to fail.']
  ),
  new ToolDetailItem(
    uuid(),
    'Pr',
    'Protractor',
    ToolCategory.E2E_TEST,
    '',
    'assets/logos/protractor.png',
    [],
    ['Deprecated by Angular as of v12'],
    ['Selenide based']
  ),
  new ToolDetailItem(
    uuid(),
    'Cy',
    'Cypress',
    ToolCategory.E2E_TEST,
    'https://www.cypress.io',
    'assets/logos/cypress.webp',
    [
      'Multibrowser support',
      'Runs next to our frontend application in the browser -> has access to rest calls, local/session storage, cookies,...',
    ],
    [
      'Runs in the browser -> hard to hook into java processes like seeding a DB or setup data via a repository',
      'Requires a good understanding of Cypress to not write flaky tests',
      'Does not yet support Safari',
    ],
    [
      'Already quite a lot of applications in Kunlabora use Cypress -> easy to find help',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Pw',
    'Playwright',
    ToolCategory.E2E_TEST,
    'https://playwright.dev/docs/intro',
    'assets/logos/playwright.png',
    ['Multibrowser support'],
    ['Not enough knowledge of this framework yet'],
    ['Alternative for Cypress']
  ),
  new ToolDetailItem(
    uuid(),
    'Ps',
    'Playwright-Test-Snapshots',
    ToolCategory.VISUAL_REGRESSION_TEST,
    'https://playwright.dev/docs/test-snapshots',
    'assets/logos/playwright.png',
    [],
    [],
    [
      'Snapshot testing pugin for playwright',
      'Compares the screenshot against a "golden file"',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Pu',
    'Puppeteer',
    ToolCategory.VISUAL_REGRESSION_TEST,
    'https://pptr.dev',
    'assets/logos/puppeteer.png',
    [],
    [],
    ['Compares the screenshot against a "golden file"']
  ),
  new ToolDetailItem(
    uuid(),
    'Cx',
    'Cypress Axe',
    ToolCategory.ACCESSIBILITY_TEST,
    'https://github.com/component-driven/cypress-axe',
    'assets/logos/cypress.webp',
    ['Tests accessibility of the entire page'],
    [
      'Check happens when command is called, any changes that happen later on the page are not checked',
    ],
    ['Accessibility testing library for Cypress']
  ),
  new ToolDetailItem(
    uuid(),
    'Jx',
    'Jest Axe',
    ToolCategory.ACCESSIBILITY_TEST,
    'https://github.com/nickcolley/jest-axe#readme',
    'assets/logos/npm.png',
    ['Tests accessibility!', 'Automated checking of accessibility rules'],
    [
      'Does not catch all problems',
      'Actual manual testing with assistive technologies still required',
    ],
    ['Accessibility testing library for Jest']
  ),
  new ToolDetailItem(
    uuid(),
    'Rx',
    'RxJs',
    ToolCategory.LIBRARY,
    'https://rxjs.dev',
    'assets/logos/rxjs.png',
    [
      'Observables!',
      'Very powerful once you are used to think according to the reactive paradigma',
    ],
    ['Has a LOT of operators', 'Can become complex very fast'],
    ['Reactive javascript']
  ),
  new ToolDetailItem(
    uuid(),
    'Nr',
    'NgRx',
    ToolCategory.LIBRARY,
    'https://ngrx.io',
    'assets/logos/ngrx.svg',
    [
      'Has schematics that avoid you having to write the boilerplate code',
      'Isolates the side effects of actions from your components',
    ],
    [
      'Adds a lot of complexity and boiler plate code',
      'Only use this if your app REALLY needs it!',
    ],
    ['Reactive state management for Angular apps']
  ),
  new ToolDetailItem(
    uuid(),
    'Nx',
    'Nx Monorepo',
    ToolCategory.LIBRARY,
    'https://nx.dev',
    'assets/logos/nx.png',
    ['Shared build caches', 'Has schematics for multiple tech stacks'],
    [],
    ['Monorepo build system for projects of any size']
  ),
  new ToolDetailItem(
    uuid(),
    'Ht',
    'HttpClient TestModule',
    ToolCategory.LIBRARY,
    'https://angular.io/guide/http#testing-http-requests',
    'assets/logos/angular.png',
    [],
    [],
    ['Angulars build-in testing library to mock the HttpClient']
  ),
  new ToolDetailItem(
    uuid(),
    'Js',
    'Jest AutoSpies',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/jest-auto-spies',
    'assets/logos/npm.png',
    [
      'Reduces code clutter when setting up mocks',
      'Refactoring methodnames also refactors the mocks API names',
      'Correct typing',
    ],
    [],
    [
      'When asking for a mock for a specific class, it returns one containing the classes entire API',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Nm',
    'NgMocks',
    ToolCategory.LIBRARY,
    'https://github.com/ike18t/ng-mocks',
    'assets/logos/npm.png',
    [],
    [],
    [
      'Testing library which helps with mocking services, components, directives, pipes and modules.',
    ]
  ),
  new ToolDetailItem(
    uuid(),
    'Sb',
    'StoryBook',
    ToolCategory.LIBRARY,
    'https://storybook.js.org',
    'assets/logos/storybook.png',
    [
      'Provides a sandbox to develop and test components in isolation',
      'Helps making good abstractions of your components',
      'Does not require you te setup your app so that you can reach the correct page where you are adding the component under development',
      'Your tests also serve as an extended documentation',
      'Has lots of plugins to improve and adapt your workflow to your way of working',
    ],
    [],
    ['Build and test your components and pages in isolation']
  ),
  new ToolDetailItem(
    uuid(),
    'St',
    'SuperTest',
    ToolCategory.LIBRARY,
    'https://www.npmjs.com/package/supertest',
    'assets/logos/npm.png',
    [],
    [],
    ['Javascript librarie to test your REST API']
  ),
  new ToolDetailItem(
    uuid(),
    'Ms',
    'MockServer',
    ToolCategory.LIBRARY,
    'https://www.mock-server.com/',
    'assets/logos/npm.png',
    [],
    [],
    ['Easy to mock a http server you integrate with']
  ),
];
