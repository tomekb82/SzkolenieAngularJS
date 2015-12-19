'use strict';

angular.module('tasksManager.common')
    .directive('chart', function() {
        function prepareData(yaxisArray, yaxisKey, xaxisArray, xaxisKey) {
            var data = [];
            xaxisArray.forEach(function(xElement) {
                var count = 0;
                yaxisArray.forEach(function(yElement) {
                    if (xElement[xaxisKey] === yElement[yaxisKey]) {
                        count++;
                    }
                });
                data.push([xElement[xaxisKey], count]);
            });
            return data;
        }

        function link(scope, element, attrs) {
            scope.$watchCollection('yaxisArray', function() {
                var data = prepareData(scope.yaxisArray, scope.yaxisKey, scope.xaxisArray, scope.xaxisKey);
                $.plot(element, [data], {
                    series: {
                        bars: {
                            show: true,
                            barWidth: 0.6,
                            align: 'center'
                        }
                    },
                    xaxis: {
                        mode: 'categories',
                        tickLength: 0
                    }
                });
            });
        }

        return {
            restrict: 'E',
            replace: true,
            template: '<div></div>',
            scope: {
                yaxisArray: '=',
                yaxisKey: '@',
                xaxisArray: '=',
                xaxisKey: '@'
            },
            link: link
        };

    });