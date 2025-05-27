import { Given } from "@cucumber/cucumber";

Given(/^I am on the home page$/, async function () {
  console.log("I am on the Home page");
  await global.page.goto("http://localhost:3000/");
});
