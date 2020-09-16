const express = require('express');

const {
    getSignals,
    getSignal,
    sendSignal,
    deleteSignal
} = require('../controllers/signals');

const Signal = require('../models/Signal');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router
    .route('/')
    .get(protect, authorize('publish'), advancedResults(Signal), getSignals);

router
    .route('/:name')
    .get(protect, authorize('publish'), getSignal)
    .post(sendSignal)
    .delete(protect, authorize('publish', 'admin'), deleteSignal);

module.exports = router;



