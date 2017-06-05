export default (fn, context) => {
    let result;

    return (...args) => {
        if (fn) {
            result = fn.apply(context || this, args);
            fn = null; // eslint-disable-line no-param-reassign
        }
        return result;
    };
};
