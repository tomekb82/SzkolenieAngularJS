'use strict';

angular.module('tasksManager.users')
    .service('usersService', ['$http', function($http) {
        var baseUrl = 'http://localhost:3000/users';

        this.getAll = function() {
            return $http({
                method: 'GET',
                url: baseUrl
            });
        };

        this.save = function(user) {
            var promise;
            if (user._id) {
                promise = $http({
                    method: 'PUT',
                    url: baseUrl + '/' + user._id,
                    data: user
                });
            } else {
                promise = $http({
                    method: 'POST',
                    url: baseUrl,
                    data: user
                });
            }
            return promise;
        };

        this.delete = function(user) {
            return $http({
                method: 'DELETE',
                url: baseUrl + '/' + user._id,
            });
        };
    }]);
