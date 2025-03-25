import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/example.page";

test("Sample test", async ({ page }) => {
  const examplePage = new HomePage(page);
  await examplePage.navigate();
  const title = await examplePage.getTitle();
  expect(title).toBe("Ignatev Estate");
});
