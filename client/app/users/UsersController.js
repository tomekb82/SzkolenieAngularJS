'use strict';

angular.module('tasksManager.users')
    .controller('UsersController', ['restService', function(restService) {
        var scope = this,
            baseUrl = 'http://localhost:3000/users/';

        function refresh() {
            restService.get({url: baseUrl}).then(function(response) {
                 scope.users = response.data;
            });
        }

        scope.currentUser = null;
        scope.users = [];

        scope.setCurrentUser = function(user) {
            scope.currentUser = angular.copy(user);
        };

        scope.save = function() {
            var promise,
                config = {
                    url : baseUrl,
                    data: scope.currentUser
                };
            if (scope.currentUser._id) {
                config.url += scope.currentUser._id;
                promise = restService.put(config);
            } else {
                promise = restService.post(config);
            }
            promise.then(refresh);
            scope.currentUser = null;
        };

        scope.delete = function($event, user) {
            $event.stopPropagation();
            restService.delete({url: baseUrl + user._id}).then(refresh);
        };

        refresh();
    }]);