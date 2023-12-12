const bubbleSort = require('./bubble-sort');

const n = 100000;
const arr = [];

for (let i = 0; i < n; i++) {
    arr.unshift(i);
    let startTime = Date.now();
    bubbleSort(arr);
    let endTime = Date.now();
    console.log(endTime - startTime);
}
