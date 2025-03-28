import { Page } from "@playwright/test";
import { time } from "console";

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

  private get contactUsBttn() {
    return this.page.locator('//html/body/main/div[1]/div/div/div/div[2]/a/span');
  }

  private get contactUsForm() {
    return this.page.locator("#contactSection");
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
    return this.moviePlayer.isVisible();
  }

  async clickOnContactUs() {
    await this.contactUsBttn.click();
  }

  async isContactUsFormVisible(): Promise<boolean> {
    return await this.contactUsForm.isVisible();
  }
}
