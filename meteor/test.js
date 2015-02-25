'use strict';

Tinytest.add('JSON-LD processor integration', function (test) {
  test.ok(jsonld.compact, {message: 'JSON-LD compact() present.'});
  test.ok(jsonld.expand, {message: 'JSON-LD expand() present.'});
  test.ok(jsonld.flatten, {message: 'JSON-LD flatten() present.'});
  test.ok(jsonld.frame, {message: 'JSON-LD frame() present.'});
  test.ok(jsonld.normalize, {message: 'JSON-LD normalize() present.'});
});
