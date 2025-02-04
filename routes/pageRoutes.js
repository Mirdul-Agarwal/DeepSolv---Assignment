const express = require('express');
const { getPageData } = require('../controllers/pageController');

const router = express.Router();

router.get('/:username', getPageData);

module.exports = router;
