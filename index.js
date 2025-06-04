const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  console.log("Visiting Google...");
  await page.goto("https://www.google.com", { waitUntil: "networkidle2" });

  // Delay for 5 seconds using a Promise
  await new Promise(resolve => setTimeout(resolve, 5000));

  const title = await page.title();
  console.log("Page title:", title);

  await browser.close();
})();
