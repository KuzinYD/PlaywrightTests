import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { Navbar } from "../pages/components/Navbar";
import { SearchBar } from "../pages/components/SearchBar";

test.beforeEach(async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
});

test("Should open home page", async ({ page }) => {
  const home = new HomePage(page);
  const title = await home.getTitle();
  expect(title).toBe("Ignatev Estate");
});

test("Should open listings", async ({ page }) => {
  const navbar = new Navbar(page);
  await navbar.clickOnTab("Listings");
  expect(page.url()).toBe("https://estateadmin.somespace.space/listings");
});

test("Should open the Insider Club", async ({ page }) => {
  const navbar = new Navbar(page);
  await navbar.clickOnTab("Insider Club");
  expect(page.url()).toBe("https://estateadmin.somespace.space/club");
});

test("Should open insights", async ({ page }) => {
  const navbar = new Navbar(page);
  await navbar.clickOnTab("Insights");
  expect(page.url()).toBe("https://estateadmin.somespace.space/insights");
});

test("Should open about us", async ({ page }) => {
  const navbar = new Navbar(page);
  await navbar.clickOnTab("About Us");
  expect(page.url()).toBe("https://estateadmin.somespace.space/about-us");
});

test("Should open video", async ({ page }) => {
  const home = new HomePage(page);
  await home.clickOnWatchVideo();
  await home.isMoviePlayerVisible();
  expect(await home.isMoviePlayerVisible()).toBeTruthy();
});

test("Should check if contact us section is in focus", async ({ page }) => {
  const home = new HomePage(page);
  await home.clickOnContactUs();
  await home.isContactUsFormInViewport();
  expect(await home.isContactUsFormVisible()).toBeTruthy();
});

test("Should input keywords in search bar", async ({ page }) => {
  const searchBar = new SearchBar(page);
  await searchBar.typeInKeywordInput("test");
});
