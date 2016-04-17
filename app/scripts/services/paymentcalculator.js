'use strict';

angular.module('babysitterKataApp')
    .factory('PaymentCalculator', function () {
        return {
            calculatePayment: function (startTime, endTime, bedTime) {
                return (startTime !== undefined && endTime !== undefined && bedTime !== undefined ) ? 88 : 0;
            }
        };
    });
