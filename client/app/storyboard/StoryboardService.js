'use strict';

angular.module('tasksManager.storyboard')
    .service('storyboardService', ['$http', function($http) {
        var baseUrl = 'http://localhost:3000/stories';

        this.getAll = function() {
            return $http({
                method: 'GET',
                url: baseUrl
            });
        };

        this.save = function(story) {
            var promise;
            if (story._id) {
                promise = $http({
                    method: 'PUT',
                    url: baseUrl + '/' + story._id,
                    data: story
                });
            } else {
                promise = $http({
                    method: 'POST',
                    url: baseUrl,
                    data: story
                });
            }
            return promise;
        };

    }]);
