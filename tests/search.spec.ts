import { test, expect } from "@playwright/test";
import { SearchBar } from "../pages/components/SearchBar";
import { SearchType } from "../helpers/enums/SearchType";
import { SearchLocation } from "../helpers/enums/SearchLocation";

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
});

test("Interact with search", async ({ page }) => {
  const searchBar = new SearchBar(page);
  await searchBar.typeInKeywordInput("Villa");
  await searchBar.clickOnTypeDropDown();
  await searchBar.selectType(SearchType.ForRent);
  await searchBar.clickOnLocationDropDown();
  await searchBar.selectLocation(SearchLocation.Location1);
  await searchBar.clickOnBedroomInput();
  await searchBar.clickMultipleTimes(searchBar.increaseBedNumber, 5);
  await searchBar.clickOnPriceInput();
  await searchBar.setPriceRange(10_000_000, 20_000_000);
  await searchBar.clickOnSearchButton();
  await page.pause();
});
