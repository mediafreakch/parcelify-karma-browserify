module.exports = function(config) {

    config.set({

        frameworks: [ 'browserify', 'jasmine' ],

        files: [
            './spec/dist/bundle.css',
            './spec/*spec.js'
        ],

        preprocessors: {
            './spec/*spec.js': [ 'browserify' ]
        },

        browsers: [ 'Chrome' ],

        singleRun: false,

        reporters: [ 'progress' ],

        browserify: {
            plugin: [ [ 'parcelify', { o: './spec/dist/bundle.css' } ] ]
        }
    });
};
