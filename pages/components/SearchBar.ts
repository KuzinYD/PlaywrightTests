import { Locator, Page } from "@playwright/test";
import { SearchType } from "../../helpers/enums/SearchType";
import { SearchLocation } from "../../helpers/enums/SearchLocation";

export class SearchBar {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly keywordInput: Locator;
  readonly typeDropDown: Locator;
  readonly locationInput: Locator;
  readonly bedroomInput: Locator;
  readonly increaseBedNumber: Locator;
  readonly decreaseBedNumber: Locator;
  readonly priceInput: Locator;
  readonly priceInputTo: Locator;
  readonly priceInputFrom: Locator;
  readonly expandFilters: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator("css=#searchForm");
    this.keywordInput = page.getByPlaceholder("keywords");
    this.typeDropDown = page.getByPlaceholder("type");
    this.locationInput = page.getByPlaceholder("location");
    this.bedroomInput = page.getByRole("button", { name: "🛏️" });
    this.increaseBedNumber = page.locator(
      "xpath=//*[@id='searchForm']/div[5]/div/div/button[2]"
    );
    this.decreaseBedNumber = page.locator(
      "xpath=//*[@id='searchForm']/div[5]/div/div/button[1]"
    );
    this.priceInput = page.getByPlaceholder("price");
    this.priceInputFrom = page.locator("#priceInputFrom");
    this.priceInputTo = page.locator("#priceInputTo");
    this.expandFilters = page.locator(
      "xpath=//*[@id='searchForm']/div[7]/button[1]"
    );
    this.searchButton = page.getByRole("button", { name: "Search" });
  }

  async typeInKeywordInput(input: string) {
    await this.keywordInput.fill(input);
  }

  async clickOnTypeDropDown() {
    await this.typeDropDown.click();
  }

  async selectType(type: SearchType) {
    const typeName = this.page.locator(
      `xpath=//*[@id='searchForm']/div[3]/ul/li/span[normalize-space(text())="${type}"]`
    );
    await typeName.click();
  }

  async clickOnLocationDropDown() {
    await this.locationInput.click();
  }

  async selectLocation(location: SearchLocation) {
    const locationName = this.page.locator(
      `xpath=//*[@id='searchForm']/div[4]/ul/li/span[normalize-space(text())="${location}"]`
    );
    await locationName.click();
  }

  async clickOnBedroomInput() {
    await this.bedroomInput.click();
  }

  async clickMultipleTimes(button: Locator, xTimes: number) {
    for (let i = 0; i < xTimes; i++) {
      await button.click();
    }
  }

  async clickOnPriceInput() {
    await this.priceInput.click();
  }

  async setPriceRange(from: number, to: number) {
    await this.priceInputFrom.click();
    await this.priceInputFrom.clear();
    await this.priceInputFrom.fill(from.toString());
    await this.priceInputTo.click();
    await this.priceInputTo.fill(to.toString());
  }

  async clickOnSearchButton() {
    await this.searchButton.click();
  }
}
