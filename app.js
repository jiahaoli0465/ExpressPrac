const express = require('express');
const ExpressError = require("./expressError")


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

    return res.send('test');
});

app.get("/median", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');

    return res.send('test');
});

app.get("/mode", function(req, res) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }

    let numsAsStrings = req.query.nums.split(',');

    return res.send('test');
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