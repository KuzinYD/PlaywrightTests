import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  // Define locators
  private get loginButton() {
    return this.page.locator("text=Login");
  }

  private get searchInput() {
    return this.page.locator("input[name='search']");
  }

  private get searchButton() {
    return this.page.locator("button[type='submit']");
  }

  async navigate() {
    await this.page.goto("https://estateadmin.somespace.space");
  }

  async getTitle() {
    return this.page.title();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async searchFor(query: string) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async isLoginButtonVisible() {
    return this.loginButton.isVisible();
  }
}
