'use strict';

describe('Factory: PaymentCalculator', function () {

    beforeEach(module('babysitterKataApp'));

    var _PaymentCalculator;

    var startTime;
    var endTime;
    var bedTime;

    beforeEach(inject(function (PaymentCalculator) {
        _PaymentCalculator = PaymentCalculator;
    }));

    it('should be defined', function () {
        expect(_PaymentCalculator !== undefined).toBeTruthy();
    });

    describe('calculatePayment with invalid number of parameters', function () {

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

    describe('calculatePayment with invalid times', function () {

        it('should return 0 if start time is before 5pm', function () {
            startTime = '15:00';
            endTime = '2:00';
            bedTime = '22:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(0);

            startTime = '16:00';
            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(0);
        });

        it('should return 0 if end time is after 4am', function () {
            startTime = '17:00';
            endTime = '5:00';
            bedTime = '22:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(0);

            endTime = '6:00';
            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(0);
        });

        it('should return 0 if bed time is midnight or later', function () {
            startTime = '17:00';
            endTime = '4:00';
            bedTime = '00:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(0);

            bedTime = '1:00';
            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(0);
        });
    });


    describe('calculatePayment with valid parameters', function () {

        it('should return correct payment for long jobs', function () {
            startTime = '17:00';
            endTime = '1:00';
            bedTime = '21:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(88);

            startTime = '18:00';
            endTime = '3:00';
            bedTime = '20:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(104);
        });

        it('should return correct payment for jobs ending on or before midnight', function () {
            startTime = '17:00';
            endTime = '00:00';
            bedTime = '21:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(72);

            startTime = '18:00';
            endTime = '20:00';
            bedTime = '19:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(20);
        });

        it('should return correct payment for edge case jobs', function () {
            startTime = '17:00';
            endTime = '18:00';
            bedTime = '18:00';
            
            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(12);

            startTime = '21:00';
            endTime = '00:00';
            bedTime = '21:00';

            expect(_PaymentCalculator.calculatePayment(startTime, endTime, bedTime)).toBe(24);
        });
    });
});
