import { Page } from "@playwright/test";

export class SetupTest {
  constructor(private page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState("domcontentloaded");
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }

  async clearCookiesAndStorage() {
    await this.page.context().clearCookies();
    await this.page.context().clearPermissions();
    await this.page.evaluate(() => localStorage.clear());
    await this.page.evaluate(() => sessionStorage.clear());
  }
}
