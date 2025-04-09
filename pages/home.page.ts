import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly mainTitle: Locator;
  readonly watchVideoBttn: Locator;
  readonly moviePlayer: Locator;
  readonly contactUsBttn: Locator;
  readonly contactUsForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainTitle = page.getByText(
      "clarity for investors visibility for developers",
      { exact: true }
    );
    this.watchVideoBttn = page.getByText("watch a video", {
      exact: true,
    });
    this.moviePlayer = page.locator(".uk-lightbox-items li iframe");
    this.contactUsBttn = page.locator(
      "//html/body/main/div[1]/div/div/div/div[2]/a/span"
    );
    this.contactUsForm = page.locator("#contactSection");
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

  async isContactUsFormInViewport() {
    console.log("Accessing contact us form in viewport");
    await expect(this.contactUsForm).toBeInViewport();
  }
}
