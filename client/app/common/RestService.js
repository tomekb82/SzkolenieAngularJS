'use strict';

angular.module('tasksManager.common')
    .service('restService', ['$http', '$cacheFactory', '$q', function($http, $cacheFactory, $q) {

        function mix(config) {
            var defaults = {
                    cache: false
                },
                prop;
            for (prop in config) {
                if (config.hasOwnProperty(prop)) {
                    defaults[prop] = config[prop];
                }
            }
            return defaults;
        }

        function request(config) {
            var cache = $cacheFactory.get('$http'),
                settings = mix(config),
                promise;
            if (settings.cache === true && cache[settings.url]) {
                promise = $q.defer().resolve(cache[settings.url]);
            } else {
                promise = $http(settings);
            }
            return promise;
        }

        this.get = function(config) {
            config.method = 'GET';
            return request(config);
        };

        this.put = function(config) {
            config.method = 'PUT';
            return request(config);
        };

        this.post = function(config) {
            config.method = 'POST';
            return request(config);
        };

        this.delete = function(config) {
            config.method = 'DELETE';
            return request(config);
        };

    }]);
