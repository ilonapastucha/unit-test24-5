const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('normal', () => {
		it('should return 131.8', () => {
			const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);
			const expected = '131.8';
			assert.equal(actual, expected);
		})
		it('should return 113.9', () => {
			const actual = calculateTotalPoints(107.5, 'normal', 98, [17.5, 17.5, 18.0, 18.5, 18.0], 0, -18.6);
			const expected = '113.9';
			assert.equal(actual, expected);
		})
		it('should return 98.8', () => {
			const actual = calculateTotalPoints(93.0, 'normal', 98, [17.0, 16.5, 17.0, 17.0, 17.0], 6.4, -8.6);
			const expected = '98.8';
			assert.equal(actual, expected);
		})
	})

	describe('large', () => {
		it('should return 138.9', () => {
			const actual = calculateTotalPoints(133, 'large', 120, [19.0, 19.5, 19.0, 19.0, 19.0], 0, -1.5);
			const expected = '138.9';
			assert.equal(actual, expected);
		})
		it('should return 115.5', () => {
			const actual = calculateTotalPoints(124.0, 'large', 120, [18.0, 18.0, 18.0, 18.0, 18.0], 0, -5.7);
			const expected = '115.5';
			assert.equal(actual, expected);
		})
		it('should return 89.1', () => {
			const actual = calculateTotalPoints(111, 'large', 120, [16.5, 16.0, 16.5, 16.5, 16.5], 0, -4.2);
			const expected = '89.1';
			assert.equal(actual, expected);
		})
	})
	
	describe('flying', () => {
		it('should return 208.3', () => {
			const actual = calculateTotalPoints(227.5, 'flying', 200, [18.0, 18.5, 17.5, 18.5, 18.5], -8.4, 8.7);
			const expected = '208.3';
			assert.equal(actual, expected);
		})
		it('should return 149.7', () => {
			const actual = calculateTotalPoints(187.0, 'flying', 200, [16, 16, 16.5, 16.5, 16.0], -3.2, 0);
			const expected = '149.7';
			assert.equal(actual, expected);
		})
		it('should return 179.5', () => {
			const actual = calculateTotalPoints(208.5, 'flying', 200, [17.5, 17.5, 17.5, 17.0, 17.0], -2.7, 0);
			const expected = '179.5';
			assert.equal(actual, expected);
		})
	})

	describe('distancePoints is null', () => {
        it('expected null', () => {
            const actual = calculateTotalPoints(226, 'test', 200, [17.5, 17.5, 17.5, 17.0, 17.0], -2.7, 0);
			const expected = null;
			assert.equal(actual, expected);
        });
    }); 
})