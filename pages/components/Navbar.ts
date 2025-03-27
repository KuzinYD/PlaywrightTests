import { Locator, Page } from "@playwright/test";

export class Navbar {
  readonly page: Page;
  readonly listings: Locator;
  readonly insiderClub: Locator;
  readonly insights: Locator;
  readonly aboutUs: Locator;
  readonly localeSwitcher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listings = page.locator("//header[1]/div/div/nav/div[2]/ul/li[1]/a");
    this.insiderClub = page.locator(
      "//header[1]/div/div/nav/div[2]/ul/li[2]/a"
    );
    this.insights = page.locator("//header[1]/div/div/nav/div[2]/ul/li[3]/a");
    this.aboutUs = page.locator("//header[1]/div/div/nav/div[2]/ul/li[4]/a");
    this.localeSwitcher = page.locator(
      "//header[1]/div/div/nav/div[2]/ul/li[5]/a"
    );
  }

  async clickOnTab(tabName: string) {
    switch (tabName) {
      case "Listings":
        await this.listings.click();
        break;
      case "Insider Club":
        await this.insiderClub.click();
        break;
      case "Insights":
        await this.insights.click();
        break;
      case "About Us":
        await this.aboutUs.click();
        break;
      default:
        throw new Error(`Unknown tab: ${tabName}`);
    }
  }

  async switchLocale(locale: "RU" | "EN") {
    await this.localeSwitcher.click();
    const localeOption = this.page.locator(
      `a[href*="/change-locale/${locale.toLowerCase()}"]`
    );
    await localeOption.click();
  }
}
