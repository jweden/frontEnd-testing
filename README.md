frontEnd-testing
================

You can run this demo in a couple ways.  You can launch SpecRunner.html in your browser.  You can bring up myForm.html
to see the app under test.  Also, you can install <a href="http://karma-runner.github.io/">Karma</a> and run the tests
using the my.conf.js karma config file as shown in the screencast <a href = "http://screenr.com/iPmH">here</a>.

What does this do?  It runs 6 jasmine javascript tests that use an html fixture to pre-populate the DOM.  Then we
launch tests also by accessing the DOM using jquery to fill out the form and click. You can play with this demo at
codepen <a href = "http://codepen.io/jweden/details/Irmil">here</a>.  The whole idea here is that we can run javascript
unit tests (in browser) where the tests are validating the DOM was manipulated correctly.  One test will
fail in IE as a nice example of a cross-browser issue (see screencast for more info).
