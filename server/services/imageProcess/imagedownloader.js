const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');

module.exports.downloadImage = async function(url) {
  //   const url = "https://unsplash.com/photos/AaEQmoufHLk/download?force=true";
  const path = Path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    'images',
    'code.jpg',
  );
  const writer = Fs.createWriteStream(path);

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve(path));
    writer.on('error', reject);
  });
};
