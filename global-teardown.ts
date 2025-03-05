import { chromium, Page } from "@playwright/test";

async function globalTeardown() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {;
    await context.tracing.start({ screenshots: true, snapshots: true });
    // await cleanUpFunc(page);
  } catch (e) {
    console.log(`Error in globalTeardown: ${e}`);
  } finally {
    await browser.close();
  }
}

export default globalTeardown;
