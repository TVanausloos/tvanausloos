import { ToolCategory } from './tool-category';

export class ToolDetailItem {
  constructor(
    private id: string,
    private abbreviation: string,
    private name: string,
    private category: ToolCategory,
    private website: string,
    private logoLocation: string,
    private textInnerHtml: string,
    private pros: string[],
    private cons: string[],
    private comments: string[]
  ) {}

  getId(): string {
    return this.id;
  }

  getAbbreviation(): string {
    return this.abbreviation;
  }

  getName(): string {
    return this.name;
  }

  getCategory(): ToolCategory {
    return this.category;
  }

  getWebsite(): string {
    return this.website;
  }

  getLogoLocation(): string {
    return this.logoLocation;
  }

  getTextInnerHtml(): string {
    return this.textInnerHtml;
  }

  getPros(): string[] {
    return this.pros;
  }

  getCons(): string[] {
    return this.cons;
  }

  getComments(): string[] {
    return this.comments;
  }
}
