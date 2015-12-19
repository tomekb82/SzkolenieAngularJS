'use strict';

angular.module('tasksManager.storyboard', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/storyboard', {
            templateUrl: 'storyboard/storyboard.html',
            controller: 'StoryboardController',
            controllerAs: 'storyboardCtrl'
        });
    }])
    .constant('storyStatus', [
        { name: 'Todo' },
        { name: 'In progress' },
        { name: 'Resolved' },
        { name: 'Closed' }
    ])
    .value('storyType', [
        { name: 'Feature' },
        { name: 'Enhancement' },
        { name: 'Bug' },
        { name: 'Spike' },
        { name: 'Task' }
    ]);
