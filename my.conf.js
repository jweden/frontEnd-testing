// Karma configuration
// Generated on Tue Jul 02 2013 11:40:24 GMT-0400 (Eastern Daylight Time)
// base path, that will be used to resolve files and exclude
basePath = '';

frameworks: ['jasmine'];

// list of files / patterns to load in the browser
files = [
   JASMINE,
   JASMINE_ADAPTER,
    {pattern: 'src/test/jasmine/lib/jquery-1.10.2.min.js', watched: false, served: true, included: true},
    {pattern: 'src/test/jasmine/lib/jasmine-jquery.js', watched: false, served: true, included: true},
    {pattern: 'src/main/webapp/myScript.js', watched: true, served: true, included: true},
    {pattern: 'src/test/jasmine/firstTest.js', watched: true, served: true, included: true}
];


proxies = {

};

// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
//logLevel = karma.LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'IE'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;

plugins: [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-junit-reporter'
];
