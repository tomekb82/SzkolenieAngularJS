'use strict';

angular.module('tasksManager.users')
    .directive('hover', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                element
                    .mouseover(function() {
                        element.addClass('panel-info');
                    })
                    .mouseleave(function() {
                        element.removeClass('panel-info');
                    });
            }
        };
    });
