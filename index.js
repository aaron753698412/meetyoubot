const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Go to Meetyou.me login page
    await page.goto('https://meetyou.me/login'); // Adjust URL if necessary

    // Log in as the bot
    await page.type('input[name="username"]', 'BOT_OCEAN'); // Adjust selector for username field
    await page.type('input[name="password"]', 'chlwlgh126!!'); // Adjust selector for password field
    await page.click('button[type="submit"]'); // Adjust selector for login button

    // Wait for login to complete
    await page.waitForNavigation();

    // Navigate to your specific room
    await page.goto('https://y99.in/r/1975573'); // Replace with your room's URL

    console.log("Bot is in the room!");

    // Optional: Monitor messages or send a greeting
    await page.type('#chatInput', 'Hello, I am BOT_OCEAN! Ready to assist.'); // Adjust selector for chat input
    await page.click('#sendButton'); // Adjust selector for send button

    // Keep the bot running
    await new Promise(resolve => setTimeout(resolve, 60000)); // Keeps the browser open for 1 minute
    await browser.close();
})();
