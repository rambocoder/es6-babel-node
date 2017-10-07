import http from 'http';
import assert from 'assert';

import '../lib/index.js';

describe('Example node server', () => {
    it('should return 200', done => {
        http.get('http://localhost:1337', res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});