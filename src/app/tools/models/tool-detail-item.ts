export class ToolDetailItem {
  constructor(
    private id: string,
    private abbreviation: string,
    private name: string,
    private website: string,
    private logoLocation: string,
    private textInnerHtml: string
  ) {}

  static fromDto({
    id,
    abbreviation,
    name,
    website,
    logoLocation,
    textInnerHtml,
  }: ToolDetailDto): ToolDetailItem {
    return new ToolDetailItem(
      id,
      abbreviation,
      name,
      website,
      logoLocation,
      textInnerHtml
    );
  }

  getId(): string {
    return this.id;
  }

  getAbbreviation(): string {
    return this.abbreviation;
  }

  getName(): string {
    return this.name;
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
}

export interface ToolDetailDto {
  id: string;
  abbreviation: string;
  name: string;
  website: string;
  logoLocation: string;
  textInnerHtml: string;
}
