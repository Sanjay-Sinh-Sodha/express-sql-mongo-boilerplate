const puppeteer = require('puppeteer');

module.exports.generatePdF = async function(req, res, url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.query.url);
    await page.emulateMedia('screen');
    // await page.setContent(content); for html filres
    // await page.pdf({
    //   path: Path.join(__dirname, '..', '..', '..', '..', 'react.pdf'), // path (relative to CWD) to save the PDF to.
    //   printBackground: true, // print background colors
    //   format: 'A4',
    //   //   width: '612px', // match the css width and height we set for our PDF
    //   //   height: '792px',
    // });
    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: 'A4',
    });

    res.set('Content-Type', 'application/pdf');
    res.status(200).send(pdfBuffer);
    // await browser.close();
    // res.download(
    //   Path.join(__dirname, '..', '..', '..', '..', 'react.pdf'),
    // );
  } catch (err) {
    res.send(err);
  }
};
