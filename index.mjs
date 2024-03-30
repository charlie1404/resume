import core from '@actions/core';
import puppeteer from 'puppeteer';
import { build, preview } from 'vite';

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
    format: 'A4',
    margin: {
      top: '10mm',
      left: '10mm',
      right: '10mm',
      bottom: '10mm',
    },
    displayHeaderFooter: true,
    headerTemplate: '<i></i>',
    footerTemplate:
      '<span style="font-size:11px; position:absolute; bottom:0.5mm; right:50%; transform:translateX(50%);">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>',
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
