const Page = require('../models/Page');
const { scrapePageData } = require('../services/scraperService');

async function getPageData(req, res) {
  const { username } = req.params;

  try {
    let page = await Page.findOne({ username }).populate('posts');

    if (!page) {
      const scrapedData = await scrapePageData(username);
      if (scrapedData) {
        page = new Page(scrapedData);
        await page.save();
      }
    }

    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching page data', error });
  }
}

module.exports = { getPageData };
