// Creates a throttled function that only invokes func at most once per every wait milliseconds.
// this is a simple version inspired by underscore
export default (func, delay = 250, scope) => {
    let last;
    let timeout;
    return (...args) => {
        const context = scope || this;
        const now = Number(new Date());

        if (last && now < last + delay) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                last = now;
                func.apply(context, args);
            }, delay);
        } else {
            last = now;
            func.apply(context, args);
        }
    };
};
