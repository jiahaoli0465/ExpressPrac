const express = require('express');
const ExpressError = require("./expressError")
const { calculateMean, numToArray, calculateMedian, calculateMode } = require('./helperFunctions')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');

    return res.send(numsAsStrings);
});

app.get("/mean", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    const nums = numToArray(numsAsStrings);
    const mean = calculateMean(nums);

    let response = {
        'operation': "mean",
        'value': mean
    }
    return res.json(response); 
});

app.get("/median", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    const nums = numToArray(numsAsStrings);
    const median = calculateMedian(nums);
    let response = {
        'operation': "median",
        'value': median
    }
    return res.json(response); 
});

app.get("/mode", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    const nums = numToArray(numsAsStrings);
    const mode = calculateMode(nums);
    let response = {
        'operation': "mode",
        'value': mode
    }
    return res.json(mode); 
});

app.get("/all", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');
    const nums = numToArray(numsAsStrings);
    const mean = calculateMean(nums);
    const median = calculateMedian(nums);
    const mode = calculateMode(nums);
    const msg = {
        'mean': mean,
        'median': median,
        'mode':mode
    }
    return res.json(msg);
});


app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});