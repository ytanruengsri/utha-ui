const merge = (...args) => {
    return Array.prototype.concat.apply([], args);
};

export default merge;
