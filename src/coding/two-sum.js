/* eslint-disable no-plusplus */
function twoSum(arr, target) {
    const result = [];
    // Bad - O(N2)
    // for (let i = 0; i < arr.length; i++) {
    //     const left = arr[i];
    //     for (let j = 0; j < arr.length; j++) {
    //         const right = arr[j];

    //         const isSameElement = i === j;
    //         const isElementExist = false;
    //         const sum = left + right;
    //         if (!isSameElement && sum === target) {
    //             result.push([i, j]);
    //         }
    //     }
    // }

    // Good - O(N)
    const cached = {};
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        // Find needed value
        const needed = target - current;
        if (!(Object.prototype.hasOwnProperty.call(cached, needed))) {
            cached[current] = i;
        } else {
            const neededIndex = cached[needed];
            result.push(neededIndex);
            result.push(i);
        }
    }
    return result;
}

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));
