export default (object = {}, path, fallback) => {
    const sanePath = Array.isArray(path) ? path : [];
    const result = sanePath.reduce((acc, val) => acc && acc[val], object);
    return result === undefined ? fallback : result;
};
