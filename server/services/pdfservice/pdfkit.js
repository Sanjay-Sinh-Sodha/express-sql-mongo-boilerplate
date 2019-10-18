const PDFDocument = require('pdfkit');
// const fs = require('fs');

module.exports.generatePDF = (req, res) => {
  let doc = new PDFDocument();
  doc
    .moveTo(300, 75)
    .lineTo(373, 301)
    .lineTo(181, 161)
    .lineTo(419, 161)
    .lineTo(227, 301)
    .fill('red', 'even-odd');

  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in...';

  doc.y = 320;
  doc.fillColor('black');
  doc.text(loremIpsum, {
    paragraphGap: 10,
    indent: 20,
    align: 'justify',
    columns: 2,
  });

  res.setHeader('Content-disposition', 'attachment; filename="test"');
  res.setHeader('Content-type', 'application/pdf');
  doc.pipe(res);
  doc.end();
  // doc.write('out.pdf');
  // res.download('out.pdf');
};
