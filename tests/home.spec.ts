import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { Navbar } from "../pages/components/Navbar";

test.beforeEach(async ({ page }) => {
  await page.waitForLoadState("domcontentloaded");
});

test("Should open home page", async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate();
  const title = await home.getTitle();
  expect(title).toBe("Ignatev Estate");
});

test("Should open listings", async ({ page }) => {
  const navbar = new Navbar(page);

  await page.goto("https://estateadmin.somespace.space");
  await navbar.clickOnTab("Listings");

  expect(page.url()).toBe("https://estateadmin.somespace.space/listings");
});

test("Should open the Insider Club", async ({ page }) => {
  const navbar = new Navbar(page);

  await page.goto("https://estateadmin.somespace.space");
  await navbar.clickOnTab("Insider Club");

  expect(page.url()).toBe("https://estateadmin.somespace.space/club");
});

test("Should open insights", async ({ page }) => {
  const navbar = new Navbar(page);

  await page.goto("https://estateadmin.somespace.space");
  await navbar.clickOnTab("Insights");

  expect(page.url()).toBe("https://estateadmin.somespace.space/insights");
});

test("Should open about us", async ({ page }) => {
  const navbar = new Navbar(page);

  await page.goto("https://estateadmin.somespace.space");
  await navbar.clickOnTab("About Us");

  expect(page.url()).toBe("https://estateadmin.somespace.space/about-us");
});
