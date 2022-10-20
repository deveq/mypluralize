'use strict';
var expect = require('chai').expect;
var index = require('../dist/index');

describe('getPlural function test', () => {
    it('should return Boys', () => {
        var result = index.getPluralize('Boy');
        expect(result).to.equal('Boys');
    });

    it('should Return Girls', () => {
        var result = index.getPluralize('Girl');
        expect(result).to.equal('Girls');
    });

    it('should return Geese', () => {
        var result = index.getPluralize('Goose');
        expect(result).to.equal('Geese');
    });

    it('should return Toys', () => {
        var result = index.getPluralize('Toy');
        expect(result).to.equal('Toys');
    });

    it('should return Men', () => {
        var result = index.getPluralize('Man');
        expect(result).to.equal('Men');
    })
});
