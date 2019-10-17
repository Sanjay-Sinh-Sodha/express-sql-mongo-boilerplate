const puppeteer = require('puppeteer');
const Path = require('path');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/', {
//     waitUntil: 'networkidle2',
//   });
// })();

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('http://localhost:3000/');
//   await page.emulateMedia('screen');
//   await page.pdf({
//     path: '../../../pdf/react.pdf', // path (relative to CWD) to save the PDF to.
//     printBackground: true, // print background colors
//     width: '612px', // match the css width and height we set for our PDF
//     height: '792px',
//   });
//   await browser.close();
// })();

module.exports.generatePdF = async function(req, res, url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url);
    await page.emulateMedia('screen');
    await page.pdf({
      path: Path.join(__dirname, '..', '..', '..', '..', 'react.pdf'), // path (relative to CWD) to save the PDF to.
      printBackground: true, // print background colors
      format: 'A4',
      //   width: '612px', // match the css width and height we set for our PDF
      //   height: '792px',
    });
    await browser.close();
    res.download(
      Path.join(__dirname, '..', '..', '..', '..', 'react.pdf'),
    );
  } catch (err) {
    res.send(err);
  }
};
