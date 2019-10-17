/* eslint-disable operator-linebreak */
function get(name, required = false, alternateName = null) {
  const val = process.env[name] || null;
  if (!val && required) {
    throw new Error(
      `${alternateName || name} environment variable is required.`,
    );
  }
  return val;
}

// tslint:disable: max-line-length
const NODE_ENV = get('NODE_ENV') || 'development';

const IS_DEV = NODE_ENV !== 'production';

// const PORT_API = +get('PORT') || 8000;

// const PORT_APP = +get('APP_PORT') || 3000;

// let urlAPI: string = get('URL_API');
// if (!urlAPI) {
//   urlAPI = IS_DEV ? get('DEVELOPMENT_URL_API') || `http://localhost:${PORT_API}` : get('PRODUCTION_URL_API', true, 'URL_API');
// }
// export const URL_API = urlAPI;

// let urlAPP: string = get('URL_APP');
// if (!urlAPP) {
//   urlAPP = IS_DEV ? get('DEVELOPMENT_URL_APP') || `http://localhost:${PORT_APP}` : get('PRODUCTION_URL_APP', true, 'URL_APP');
// }
// export const URL_APP = urlAPP;

// let cookieDomain: string = get('COOKIE_DOMAIN');
// if (!cookieDomain) {
//   cookieDomain = IS_DEV ? get('DEVELOPMENT_COOKIE_DOMAIN') : get('PRODUCTION_COOKIE_DOMAIN');
// }
// if (!cookieDomain) {
//   cookieDomain = IS_DEV ? 'localhost' : '.async-await.com';
// }
// export const COOKIE_DOMAIN = cookieDomain;

// let mongoURL: string = get('MONGO_URL');
// if (!mongoURL) {
//   mongoURL = IS_DEV ? get('MONGO_URL_TEST', true, 'MONGO_URL') : get('MONGO_URL', true);
// }
// export const MONGO_URL = mongoURL;

// export const SESSION_NAME: string = get('SESSION_NAME') || 'saas.sid';

// let sessionSecret: string = get('SESSION_SECRET');
// if (!sessionSecret) {
//   if (!IS_DEV) {
//     throw new Error('SESSION_SECRET environment variable is required.');
//   }
//   sessionSecret = Math.random().toString(36).substring(2);
// }

// export const SESSION_SECRET: string = sessionSecret;

// export const GOOGLE_CLIENTID: string = get('GOOGLE_CLIENTID') || get('Google_clientID');
// export const GOOGLE_CLIENTSECRET: string = get('GOOGLE_CLIENTSECRET') || get('Google_clientSecret');

const AMAZON_ACCESSKEYID =
  get('AMAZON_ACCESSKEYID') || get('Amazon_accessKeyId');
const AMAZON_SECRETACCESSKEY =
  get('AMAZON_SECRETACCESSKEY') || get('Amazon_secretAccessKey');

// export const EMAIL_SUPPORT_FROM_ADDRESS: string = get('EMAIL_SUPPORT_FROM_ADDRESS');

// export const MAILCHIMP_API_KEY: string = get('MAILCHIMP_API_KEY');
// export const MAILCHIMP_REGION: string = get('MAILCHIMP_REGION');
// export const MAILCHIMP_SAAS_ALL_LIST_ID: string = get('MAILCHIMP_SAAS_ALL_LIST_ID');

const STRIPE_TEST_SECRETKEY =
  get('STRIPE_TEST_SECRETKEY') || get('Stripe_Test_SecretKey');
const STRIPE_LIVE_SECRETKEY =
  get('STRIPE_LIVE_SECRETKEY') || get('Stripe_Live_SecretKey');
const STRIPE_SECRETKEY = IS_DEV
  ? STRIPE_TEST_SECRETKEY
  : STRIPE_LIVE_SECRETKEY;

const STRIPE_TEST_PUBLISHABLEKEY =
  get('STRIPE_TEST_PUBLISHABLEKEY') ||
  get('Stripe_Test_PublishableKey');
const STRIPE_LIVE_PUBLISHABLEKEY =
  get('STRIPE_LIVE_PUBLISHABLEKEY') ||
  get('Stripe_Live_PublishableKey');
const STRIPE_PUBLISHABLEKEY = IS_DEV
  ? STRIPE_TEST_PUBLISHABLEKEY
  : STRIPE_LIVE_PUBLISHABLEKEY;

const STRIPE_TEST_PLANID =
  get('STRIPE_TEST_PLANID') || get('Stripe_Test_PlanId');
const STRIPE_LIVE_PLANID =
  get('STRIPE_LIVE_PLANID') || get('Stripe_Live_PlanId');
const STRIPE_PLANID = IS_DEV
  ? STRIPE_TEST_PLANID
  : STRIPE_LIVE_PLANID;

const STRIPE_LIVE_ENDPOINTSECRET =
  get('STRIPE_LIVE_ENDPOINTSECRET') ||
  get('Stripe_Live_EndpointSecret');

module.exports = {
  NODE_ENV,
  IS_DEV,
  AMAZON_ACCESSKEYID,
  AMAZON_SECRETACCESSKEY,
  STRIPE_TEST_SECRETKEY,
  STRIPE_LIVE_SECRETKEY,
  STRIPE_SECRETKEY,
  STRIPE_TEST_PUBLISHABLEKEY,
  STRIPE_LIVE_PUBLISHABLEKEY,
  STRIPE_PUBLISHABLEKEY,
  STRIPE_TEST_PLANID,
  STRIPE_LIVE_PLANID,
  STRIPE_LIVE_ENDPOINTSECRET,
  STRIPE_PLANID,
};
