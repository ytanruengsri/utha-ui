/* eslint-disable no-use-before-define */

function isMergeableObject(val) {
    const nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]';
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}

function cloneIfNecessary(value, optionsArgument) {
    const shouldClone = optionsArgument && optionsArgument.clone === true;
    return (shouldClone && isMergeableObject(value))
        ? deepmerge(emptyTarget(value), value, optionsArgument)
        : value;
}

function defaultArrayMerge(target, source, optionsArgument) {
    const destination = target.slice();
    source.forEach((e, i) => {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination;
}

function mergeObject(target, source, optionsArgument) {
    const destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach((key) => {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach((key) => {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination;
}

function deepmerge(target, source, optionsArgument) {
    const isSourceArray = Array.isArray(source);
    const defaultOption = { arrayMerge: defaultArrayMerge };
    const options = optionsArgument || defaultOption;
    const arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (isSourceArray) {
        const isTargetArray = Array.isArray(target);
        return isTargetArray
            ? arrayMerge(target, source, optionsArgument)
            : cloneIfNecessary(source, optionsArgument);
    }

    return mergeObject(target, source, optionsArgument);
}

export default deepmerge;
