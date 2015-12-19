'use strict';

angular.module('tasksManager', ['ngRoute', 'ngMessages', 'ngCookies','ngAnimate','pascalprecht.translate', 'tasksManager.storyboard',
        'tasksManager.users', 'tasksManager.dashboard', 'tasksManager.common'])
    .config(['$routeProvider', '$translateProvider', function($routeProvider, $translateProvider) {
        $routeProvider.otherwise({redirectTo: '/storyboard'});
        $translateProvider.useSanitizeValueStrategy(null);
        //$translateProvider.translations('en', {
        //    user: 'Użytkownik'
        //});
        $translateProvider.useStaticFilesLoader({
            prefix: 'languages/',
            suffix: '.json'
        });
        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('en');
    }]);
