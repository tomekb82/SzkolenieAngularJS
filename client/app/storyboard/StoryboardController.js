'use strict';

angular.module('tasksManager.storyboard')
    .controller('StoryboardController', ['storyboardService', 'storyStatus', 'storyType', 'usersService',
            function(storyboardService, storyStatus, storyType, usersService) {
        var scope = this;

        function refresh() {
            usersService.getAll().then(function(response) {
                scope.users = response.data;
            });
            storyboardService.getAll().then(function(response) {
                scope.stories = response.data;
            });
        }

        scope.users = [];
        scope.stories = [];
        scope.currentStory = {}
        scope.storyStatus = storyStatus;
        scope.storyType = storyType;

        scope.setCurrentStory = function(story) {
            scope.currentStory = angular.copy(story);
        };

        scope.save = function() {
            storyboardService.save(scope.currentStory).then(refresh);
            scope.currentStory = null;
        };

        refresh();
    }]);
