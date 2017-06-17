export default (target, newArray) => {
    Array.prototype.push.apply(target, newArray);
};
