export class ToolSummaryItem {
  constructor(
    private id: String,
    private abbreviation: string,
    private name: string
  ) {}

  static fromDto({ id, abbreviation, name }: ToolSummaryItemDto): ToolSummaryItem {
    return new ToolSummaryItem(id, abbreviation, name);
  }

  getAbbreviation(): string {
    return this.abbreviation;
  }

  getName(): string {
    return this.name;
  }
}

export interface ToolSummaryItemDto {
  id: string;
  abbreviation: string;
  name: string;
}
