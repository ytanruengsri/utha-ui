// import debounce from 'lodash/debounce';
//
// export default debounce;

// Creates a debounced function that delays invoking `func` until after `wait`
// milliseconds have elapsed since the last time the debounced function was
// invoked.
// This is a simple version inspired by underscore
export default (func, delay = 250, scope) => {
    let timeout;
    return (...args) => {
        const context = scope || this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, delay);
    };
};
