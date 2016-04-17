'use strict';

describe('Factory: PaymentCalculator', function () {

    beforeEach(module('babysitterKataApp'));

    var _PaymentCalculator;
    beforeEach(inject(function (PaymentCalculator) {
        _PaymentCalculator = PaymentCalculator;
    }));

    it('should be defined', function () {
        expect(_PaymentCalculator !== undefined).toBeTruthy();
    });
});
