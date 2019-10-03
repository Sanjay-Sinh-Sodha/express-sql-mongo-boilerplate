// const Path = require('path');
const fs = require('fs');
const ThumborUrlBuilder = require('thumbor-url-builder');

const thumborURL = new ThumborUrlBuilder('', 'http://localhost:8000');

const imageDownloader = require('./imagedownloader');

function editImage(request, res) {
  const thumborUrl = thumborURL
    .setImagePath(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Coffee_berries_1.jpg/1200px-Coffee_berries_1.jpg',
    )
    .filter('quality(40)')
    // .resize(100, 100)
    // .smartCrop(true)
    .buildUrl();

  console.log('Thumbor url', thumborUrl);

  imageDownloader
    .downloadImage(thumborUrl)
    .then(img => {
      console.log(img);
      // const file = Path.join(__dirname, "..", "..", "..", "images", "code.jpg");
      // res.attachment(
      //   Path.join(__dirname, "..", "..", "..", "images", "code.jpg")
      // );
      // var fileName = __dirname + "/../../../images/code.jpg";
      // res.download(fileName);
      // response.setHeader("Content-disposition", "attachment; filename=" + file);
      // response.end(content);
      fs.readFile(img, (err, content) => {
        if (err) {
          res.writeHead(400, { 'Content-type': 'text/html' });
          console.log(err);
          res.end('No such file');
        } else {
          // specify Content will be an attachment
          res.setHeader(
            'Content-disposition',
            `attachment; filename=${img}`,
          );
          res.end(content);
        }
      });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  editImage,
};
