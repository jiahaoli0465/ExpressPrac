function calculateMean(nums) {
    let sum = nums.reduce((accumulator, num) => accumulator + num, 0);
    return sum / nums.length;
}

function calculateMedian(nums) {

}

function numToArray(arr) {
    // Convert each string in the array to a number
    return arr.map(function(numStr) {
        return parseFloat(numStr);
    });
}

module.exports = { calculateMean, numToArray };
