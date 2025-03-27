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

  private get watchVideoBttn() {
    return this.page.getByText("watch a video", { exact: true });
  }

  private get watchOnYT() {
    return this.page.locator(".ytp-impression-link");
  }

  async getTitle() {
    return this.page.title();
  }

  async isMainTitleVisible() {
    return this.mainTitle.isVisible();
  }

  async clickOnWatchVideo() {
    await this.watchVideoBttn.click();
  }
}
