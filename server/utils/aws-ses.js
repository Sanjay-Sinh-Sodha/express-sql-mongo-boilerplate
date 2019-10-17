const aws = require('aws-sdk');

const {
  AMAZON_ACCESSKEYID,
  AMAZON_SECRETACCESSKEY,
} = require('./consts');

module.exports = function sendEmail(options) {
  aws.config.update({
    region: 'us-east-1',
    accessKeyId: AMAZON_ACCESSKEYID,
    secretAccessKey: AMAZON_SECRETACCESSKEY,
  });

  const ses = new aws.SES({ apiVersion: 'latest' });

  return new Promise((resolve, reject) => {
    ses.sendEmail(
      {
        Source: options.from,
        Destination: {
          CcAddresses: options.cc,
          ToAddresses: options.to,
        },
        Message: {
          Subject: {
            Data: options.subject,
          },
          Body: {
            Html: {
              Data: options.body,
            },
          },
        },
        ReplyToAddresses: options.replyTo,
      },
      (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      },
    );
  });
};
