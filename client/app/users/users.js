'use strict';

angular.module('tasksManager.users', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'users/users.html',
            controller: 'UsersController',
            controllerAs: 'usersCtrl'
        });
    }]);
