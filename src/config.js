/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

// To add more locale
// 1. Add locale to these files
//    - /src/client.js
//    - /src/clientLoader.js
//    - /src/components/LanguageSwitcher/LanguageSwitcher.js
// 2. Run "npm run extractMessages"
// 3. Edit translation in /src/messages/xx_XX.json (Key "message")
// Default locale is the first one
export const locales = ['en-US', 'nb-NO', 'zh-CN'];

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};
