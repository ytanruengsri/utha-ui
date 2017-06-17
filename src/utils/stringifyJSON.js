function value(val) {
    switch (typeof val) {
    case 'string':
        return `"${val}"`;
    case 'number':
    case 'boolean':
        return `${val}`;
    case 'object':
        if (val === null) {
            return 'null';
        }
        if (val instanceof Date) {
            return `"${val.toISOString()}"`;
        }
        if (val instanceof Array) {
            return `[${val.map(value).join(',')}]`;
        }
        return stringify(val); // eslint-disable-line no-use-before-define
    default:
        return undefined;
    }
}

function stringify(obj) {
    if (typeof obj !== 'object' || obj === null || obj instanceof Array) {
        return value(obj);
    }

    const map = Object.keys(obj).map((key) => {
        if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') return null;
        return `"${key}": ${value(obj[key])}`;
    });

    return `{${map}}`;
}

export default stringify;
