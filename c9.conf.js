// Karma configuration
// Generated on Sun Oct 13 2013 10:17:52 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	{pattern: 'src/test/jasmine/lib/jquery-1.10.2.min.js', watched: false, served: true, included: true},
    {pattern: 'src/test/jasmine/lib/jasmine-jquery.js', watched: false, served: true, included: true},
    {pattern: 'src/main/webapp/myScript.js', watched: true, served: true, included: true},
    {pattern: 'src/test/jasmine/firstTest.js', watched: true, served: true, included: true}
      
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    hostname: process.env.IP,
port: process.env.PORT,
    // web server port
  //  port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
