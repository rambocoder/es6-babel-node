import assert from 'assert';

import { Circle } from '../lib/circle.js';

describe('Circle circlesMade static attribute', () => {
    it('should increase number', done => {
        let c = new Circle(10);
        let c2 = new Circle(100);
        assert.equal(2, Circle.circlesMade);
        done();
    });
});