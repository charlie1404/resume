// const core = require('@actions/core');
import puppeteer from 'puppeteer';
import { build, preview } from 'vite';

const core = {
  info: console.log,
  error: console.error,
  setFailed: console.error,
};

let server = null;
let browser = null;

async function run() {
  const outputFilePath = './resume.pdf';

  core.info('Starting vite server!!');

  await build();
  server = await preview({ preview: { port: 8088 } });

  core.info('Starting puppeteer!!');
  browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });

  core.info('Navigating to server url!!');
  const page = (await browser.pages())[0];
  await page.goto('http://localhost:8088', { waitUntil: ['networkidle0'] });

  core.info('Starting generating PDF!!');
  await page.pdf({
    path: outputFilePath,
    format: 'Legal',
    // format: 'A4',
    margin: { top: '5mm', left: '5mm', right: '5mm', bottom: '5mm' },
    printBackground: false,
    // pageRanges: '1',
  });

  core.info('PDF generation complete!!');
  server.httpServer.close();
  browser.close();
}

run().catch((error) => {
  core.error(error.message);
  core.setFailed('Action Failed');
  if (server) {
    server.httpServer.close();
  }
  if (browser) {
    browser.close();
  }
});
