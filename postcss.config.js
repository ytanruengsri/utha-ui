module.exports = {
    plugins: [
        /*eslint-disable*/
        require('precss')({}),
        require('postcss-cssnext')({ browsers: ['> 1%', 'IE 11'], cascade: false }),
        /*eslint-enable*/
    ],
};
