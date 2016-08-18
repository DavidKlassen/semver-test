const test = require('tape');
const api = require('./../index');


test('public exports', function (t) {
    t.equal(typeof api.foo, 'function');
    t.end();
});

test('api.foo()', function (t) {
    t.equal(api.foo(), 'foo');
    t.end();
});
