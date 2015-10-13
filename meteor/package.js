// package metadata file for Meteor.js
'use strict';

Package.describe({
  name: 'digitalbazaar:jsonld',
  summary: 'A JSON-LD Processor and API implementation in JavaScript http://json-ld.org/ - official Meteor packaging',
  version: '0.3.23-dev',
  git: 'https://github.com/digitalbazaar/jsonld.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('jsonld'),
  api.addFiles([
    'js/jsonld.js'
  ], ['client']);
});

Package.onTest(function (api) {
  api.use('digitalbazaar:jsonld');
  api.use('tinytest');
  api.use('es5-shim');

  api.addFiles([
    'meteor/test.js'
  ], ['client']);
});
