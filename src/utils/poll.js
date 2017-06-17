/* eslint-disable max-len */
export default (fn, timeout, interval = 100) => {
    const endTime = Number(new Date()) + (timeout || 2000);

    const checkCondition = (resolve, reject) => {
        const result = fn();
        if (result) { // If the condition is met, we're done!
            resolve(result);
        } else if (Number(new Date()) < endTime) { // If the condition isn't met but the timeout hasn't elapsed, go again
            setTimeout(checkCondition, interval, resolve, reject);
        } else { // Didn't match and too much time, reject!
            reject(new Error(`timed out for ${fn}: ${arguments}`));
        }
    };

    return new Promise(checkCondition);
};
