import { ToolCategory } from './tool-category';

export class ToolSummaryItem {
  constructor(
    private id: String,
    private abbreviation: string,
    private name: string,
    private category: ToolCategory
  ) {}

  static fromDto({
    id,
    abbreviation,
    name,
    category,
  }: ToolSummaryItemDto): ToolSummaryItem {
    return new ToolSummaryItem(id, abbreviation, name, category);
  }

  getId(): String {
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
}

export interface ToolSummaryItemDto {
  id: string;
  abbreviation: string;
  name: string;
  category: ToolCategory;
}
