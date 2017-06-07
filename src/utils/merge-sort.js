function merge(left, right) {
    const result = [];

    while (left.length || right.length) {
        if (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } else if (left.length) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result;
}

function mergeSort(arr) {
    // If the list is of length 0 or 1, then it is already sorted. Otherwise:
    if (arr.length < 2) {
        return arr;
    }

    // Divide the unsorted list into two sublists of about half the size.
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    // Sort each sublist recursively by re-applying merge sort.
    return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
