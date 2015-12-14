// Karma configuration
// Generated on Thu Dec 03 2015 13:33:29 GMT+0100 (Central European Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // libs
            './src/assets/libs/angular.min.js',
            './src/assets/libs/angular-route.min.js',
            './src/assets/libs/angular-local-storage.min.js',
            './src/assets/libs/angular-mocks.js',
            // source files
            './src/app/app.routes.js',
            './src/app/app.module.js',
            './src/app/components/authentication/authenticationInterceptorService.js',
            './src/app/components/authentication/authenticationModel.js',
            './src/app/components/authentication/authenticationService.js',
            './src/app/components/authentication/loginController.js',
            './src/app/components/authentication/registerController.js',
            './src/app/components/books/bookService.js',
            './src/app/components/books/bookController.js',
            './src/app/components/contact/contactService.js',
            './src/app/components/contact/contactController.js',
            // spec files
            './src/tests/app.routes.spec.js',
            './src/tests/authenticationService.spec.js',
            './src/tests/bookService.spec.js',
            './src/tests/bookController.spec.js',
            './src/tests/contactService.spec.js',
            './src/tests/contactController.spec.js',
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
}
