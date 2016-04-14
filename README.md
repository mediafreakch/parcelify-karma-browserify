# Purpose

Demonstrate the issue explained in https://github.com/nikku/karma-browserify/issues/175 .
Parcelify doesn't work with karma-browserify.

# Usage

1. Clone repository
2. Run `npm install`
3. Run `npm test`

__Expected behaviour__: Test should pass  
__Actual behaviour__: Test fails

Parcelify should write a CSS bundle to `./spec/dist/bundle.css`. But doesn't.  

If you change `karma-browserify/lib/bro.js#l317` to `w.add`, you will see parcelify creating the bundle.
