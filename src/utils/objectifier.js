// Utility method to get and set objects that may or may not exist
const objectifier = (splits, create, context) => {
    let result = context;
    for (let i = 0, s; result && (s = splits[i]); i++) {
        result = (s in result ? result[s] : (create ? result[s] = {} : undefined));
    }
    return result;
};

export const set = (path, value, context) => {
    const splits = path.split('.');
    const last = splits.pop();
    const result = objectifier(splits, true, context);
    return result && last ? (result[last] = value) : undefined;
};

export const get = (path, create, context) => {
    return objectifier(path.split('.'), create, context);
};

export const exists = (path, context) => {
    return this.get(name, false, context) !== undefined;
};
