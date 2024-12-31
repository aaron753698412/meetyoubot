const puppeteer = require('puppeteer');

(async () => {
    try {
        // Launch a headless browser
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();

        // Go to the meetyou.me website
        await page.goto('https://www.meetyou.me', { waitUntil: 'networkidle2' });

        // Log in (replace with your bot's credentials)
        await page.type('.input-username', 'BOT_OCEAN');
        await page.type('.input-username mt-1', 'chlwlgh126!!');
        await page.click('.btn btn-default login'); // Replace with the correct login button selector
        await page.waitForNavigation();

        // Join a specific room
        await page.goto('https://y99.in/r/1975573'); // Replace 'room-name' with the actual room
        await page.click('.button-87'); // Replace with the correct send button selector

        // Send a message
        await page.type('.chatinput input-flex-item public', 'Hello, I am a bot!');
        await page.click('.icon send material-icons public-send-button'); // Replace with the correct send button selector

        // Keep the browser open for chat
        console.log('Bot is running...');
    } catch (error) {
        console.error('Error:', error);
    }
})();
