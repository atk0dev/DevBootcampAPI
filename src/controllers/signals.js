const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Signal = require('../models/Signal');

// @desc      Get all signals
// @route     GET /api/v1/signals
// @access    Private
exports.getSignals = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get single signal
// @route     GET /api/v1/signals/:name
// @access    Private
exports.getSignal = asyncHandler(async (req, res, next) => {
    const latestSignal = await Signal.findOne({ name: req.params.name });

    if (!latestSignal) {
        return next(
            new ErrorResponse(`Signal not found with name of ${req.params.name}`, 404)
        );
    }

    res.status(200).json({ success: true, now: new Date(), data: latestSignal });
});

// @desc      Send signal
// @route     Post /api/v1/signals/:name
// @access    Private
exports.sendSignal = asyncHandler(async (req, res, next) => {
    let signal = await Signal.findOne({name: req.params.name});

    if (!signal) {
        req.body.name = req.params.name;
        signal = await Signal.create(req.body);
    } else {
        signal = await Signal.findByIdAndUpdate(signal._id, req.body, {
            new: true,
            runValidators: true
        });
    }

    res.status(200).json({ success: true, data: signal });
});

// @desc      Delete signal
// @route     DELETE /api/v1/signals/:name
// @access    Private
exports.deleteSignal = asyncHandler(async (req, res, next) => {
    const signal = await Signal.findOne({ name: req.params.name });

    if (!signal) {
        return next(
            new ErrorResponse(`Signal not found with name of ${req.params.name}`, 404)
        );
    }

    await signal.remove();

    res.status(200).json({ success: true, data: {} });
});


