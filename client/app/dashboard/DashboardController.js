'use strict';

angular.module('tasksManager.dashboard')
    .controller('DashboardController', ['storyboardService', 'storyType', 'storyStatus',
            function(storyboardService, storyType, storyStatus) {
        var scope = this;

        function refresh() {
            storyboardService.getAll().then(function(response) {
                 scope.stories = response.data;
            });
        }

        scope.stories = [];
        scope.storyType = storyType;
        scope.storyStatus = storyStatus;

        refresh();
    }]);