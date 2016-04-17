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

    describe('calculatePayment with invalid parameters', function () {

        it('should return 0 with 0 parameters', function () {
            expect(_PaymentCalculator.calculatePayment()).toBe(0);
        });

        it('should return 0 with 1 parameters', function () {
            expect(_PaymentCalculator.calculatePayment(null)).toBe(0);
        });

        it('should return 0 with 2 parameters', function () {
            expect(_PaymentCalculator.calculatePayment(null, null)).toBe(0);
        });
    });
});
