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

    describe('calculatePayment with valid parameters', function () {
        var startTime;
        var endTime;
        var bedTime;

        it('should return correct payment', function () {
            startTime = '17:00';
            endTime = '1:00';
            bedTime = '21:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(88);

            startTime = '18:00';
            endTime = '3:00';
            bedTime = '20:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(104);
        });
    });
});
