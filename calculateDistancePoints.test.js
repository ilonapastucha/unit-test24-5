const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal', () => {
        it('jump more than K-point, should return 86', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);
            const expected = '86';
            assert.equal(actual, expected);
        });
        it('jump less than K-point, should return 40', () => {
            const actual = calculateDistancePoints(84, 'normal', 98);
            const expected = '32';
            assert.equal(actual, expected);
        });
        it('jump equal to K-point, should return 60', () => {
            const actual = calculateDistancePoints(98, 'normal', 98);
            const expected = '60';
            assert.equal(actual, expected);
        });        
    });

    describe('large', () => {
        it('jump more than K-point, should return 85.2', () => {
            const actual = calculateDistancePoints(134, 'large', 120);
            const expected = '85.2';
            assert.equal(actual, expected);
        });
        it('jump less than K-point, should return 47.4', () => {
            const actual = calculateDistancePoints(113, 'large', 120);
            const expected = '47.4';
            assert.equal(actual, expected);
        });
        it('jump equal to K-point, should return 60', () => {
            const actual = calculateDistancePoints(120, 'large', 120);
            const expected = '60';
            assert.equal(actual, expected);
        });
    });

    describe('flying', () => {
        it('jump more than K-point, should return 151.2', () => {
            const actual = calculateDistancePoints(226, 'flying', 200);
            const expected = '151.2';
            assert.equal(actual, expected);
        });
        it('jump less than K-point, should return 112.8', () => {
            const actual = calculateDistancePoints(194, 'flying', 200);
            const expected = '112.8';
            assert.equal(actual, expected);
        });
        it('jump equal to K-point, should return 120', () => {
            const actual = calculateDistancePoints(200, 'flying', 200);
            const expected = '120';
            assert.equal(actual, expected);
        });
    });
    describe('return null', () => {
        it('should return null', () => {
            const actual = calculateDistancePoints(226, 'test', 200);
            const expected = null;
            assert.equal(actual, expected);
        });        
    });        
});