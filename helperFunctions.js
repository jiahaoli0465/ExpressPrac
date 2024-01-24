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

function calculateMode(nums) {
    let numMap = new Map();
    let maxCount = 0;
    let modes = [];

    // Count occurrences
    nums.forEach(num => {
        let count = numMap.get(num) || 0;
        numMap.set(num, count + 1);
        maxCount = Math.max(maxCount, count + 1);
    });

    // Find all numbers that match maxCount
    numMap.forEach((count, num) => {
        if (count === maxCount) {
            modes.push(num);
        }
    });

    return modes;
}

function numToArray(arr) {
    // Convert each string in the array to a number
    return arr.map(function(numStr) {
        return parseFloat(numStr);
    });
}

module.exports = { calculateMean, numToArray, calculateMedian, calculateMode };
