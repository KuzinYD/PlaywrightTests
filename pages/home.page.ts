import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  // Define locators
  private get mainTitle() {
    return this.page.getByText(
      "clarity for investors visibility for developers",
      { exact: true }
    );
  }

  async navigate() {
    await this.page.goto("https://estateadmin.somespace.space");
  }

  async getTitle() {
    return this.page.title();
  }

  async isMainTitleVisible() {
    return this.mainTitle.isVisible();
  }
}
