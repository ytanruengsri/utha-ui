/* eslint-disable no-return-assign,no-unused-expressions */
const cache = {};
export default (fn) => {
    const stringifyJson = JSON.stringify;

    const cachedFn = (...args) => {
        const hash = stringifyJson(args);
        return (hash in cache)
            ? cache[hash]
            : cache[hash] = fn.apply(this, args);
    };

    cachedFn.__cache = (() => {
        cache.remove || (cache.remove = () => {
            const hash = stringifyJson(arguments);
            return (delete cache[hash]);
        });
        return cache;
    }).call(this);

    return cachedFn;
};
