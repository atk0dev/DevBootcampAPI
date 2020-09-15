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
    .get(protect, authorize('publisher'), advancedResults(Signal), getSignals);

router
    .route('/:name')
    .get(protect, authorize('publisher'), getSignal)
    .post(sendSignal)
    .delete(protect, authorize('publisher', 'admin'), deleteSignal);

module.exports = router;



