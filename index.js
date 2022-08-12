const fs = require('fs');
const http = require('http');
const core = require('@actions/core');
const puppeteer = require('puppeteer');

let server = null;
let browser = null;

async function run() {
  const inputFilePath = './resume.html';
  const outputFilePath = './resume.pdf';

  core.info('Starting HTTP server for file!!');
  server = http
    .createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(fs.readFileSync(inputFilePath).toString());
    })
    .listen(8088);

  core.info('Starting puppeteer!!');
  browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-gpu'] });

  core.info('Navigating to server url!!');
  const page = (await browser.pages())[0];
  await page.goto('http://localhost:8088', { waitUntil: ['networkidle0'] });

  core.info('Starting generating PDF!!');
  await page.pdf({
    path: outputFilePath,
    format: 'A4',
    margin: { top: '0', left: '0', right: '0', bottom: '0' },
    printBackground: true,
  });

  core.info('PDF generation complete!!');
  server.close();
  browser.close();
}

run().catch((error) => {
  core.error(error.message);
  core.setFailed('Action Failed');
  if (server) {
    server.close();
  }
  if (browser) {
    browser.close();
  }
});
