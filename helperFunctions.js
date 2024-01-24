function calculateMean(nums) {
    let sum = nums.reduce((accumulator, num) => accumulator + num, 0);
    return sum / nums.length;
}

function calculateMedian(nums) {
    nums.sort((a, b) => a - b);

    const midIndex = Math.floor(nums.length / 2);

    // If the array has an odd length, return the middle element
    if (nums.length % 2 !== 0) {
        return nums[midIndex];
    }

    // If the array has an even length, return the average of the two middle elements
    return (nums[midIndex - 1] + nums[midIndex]) / 2;

}

function numToArray(arr) {
    // Convert each string in the array to a number
    return arr.map(function(numStr) {
        return parseFloat(numStr);
    });
}

module.exports = { calculateMean, numToArray, calculateMedian };
