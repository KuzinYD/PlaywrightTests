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

  private get moviePlayer() {
    return this.page.locator(".uk-lightbox-items li iframe");
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

  async isMoviePlayerVisible(): Promise<boolean> {
    await this.moviePlayer.waitFor({ timeout: 5000 }); // Wait for the movie player to appear
    return this.moviePlayer.isVisible();
  }
}
