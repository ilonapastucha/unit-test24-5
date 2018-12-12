const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
	describe('different notes', () => {
		it('without comma', () => {
            const actual = calculateStylePoints([15, 18, 19, 14, 16]);    
            const expected = 49;    
            assert.equal(actual, expected);
        });
		
		it('with comma', () => {
            const actual = calculateStylePoints([18, 18.5, 17.5, 19.5, 20]);
            const expected = 56;
            assert.equal(actual, expected);
        });
    });

    describe('the same notes', () => {
        it('without comma', () => {
            const actual = calculateStylePoints([18, 18, 18, 18, 18]);
            const expected = 54;
            assert.equal(actual, expected);
        });

        it('with comma', () => {
            const actual = calculateStylePoints([18.5, 18.5, 18.5, 18.5, 18.5]);
            const expected = 55.5;
            assert.equal(actual, expected);
        });
    });    
});