const axios = require('axios');
const cheerio = require('cheerio');

async function scrapePageData(username) {
  try {
    const url = `https://www.facebook.com/${username}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const pageName = $('meta[property="og:title"]').attr('content');
    const profilePic = $('meta[property="og:image"]').attr('content');
    const website = $('a[data-lynx-uri]').first().attr('href') || 'N/A';

    return {
      username,
      pageName,
      url,
      profilePic,
      website
    };
  } catch (error) {
    console.error(`Error scraping page: ${error}`);
    return null;
  }
}

module.exports = { scrapePageData };
