require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const url = process.env.TARGET_URL;
  if (!url) {
    console.error("❌ TARGET_URL is not defined in the .env file.");
    process.exit(1);
  }

  console.log("Visiting:", url);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url);

  await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3 seconds

  const title = await page.title();
  console.log("Page title:", title);

  await browser.close();
})();
