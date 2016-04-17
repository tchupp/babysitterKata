'use strict';

angular.module('babysitterKataApp')
    .factory('PaymentCalculator', function () {
        var startTimesAllowed = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '1:00', '2:00', '3:00'];
        var endTimesAllowed = ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '1:00', '2:00', '3:00', '4:00'];

        return {
            calculatePayment: function (startTime, endTime, bedTime) {
                startTime = startTimesAllowed.indexOf(startTime);
                endTime = endTimesAllowed.indexOf(endTime);
                bedTime = startTimesAllowed.indexOf(bedTime);

                if (startTime !== -1 && endTime !== -1 && bedTime !== -1) {
                    var startToBedTime = (bedTime - startTime);
                    var bedToMidnight = (startTimesAllowed.indexOf('00:00') - bedTime);
                    var midnightToEnd = (endTime - endTimesAllowed.indexOf('00:00'));

                    return startToBedTime * 12 + bedToMidnight * 8 + midnightToEnd * 16;
                }
                return 0;
            }
        };
    });
