const test = require('tape');
const api = require('./../index');


test('public exports', function (t) {
    t.equal(typeof api.foo, 'function');
    t.equal(typeof api.bar, 'function');
    t.end();
});

test('api.foo()', function (t) {
    t.equal(api.foo(), 'FOO');
    t.end();
});

test('api.bar()', function (t) {
    t.equal(api.bar(), 'BAR');
    t.end();
});
