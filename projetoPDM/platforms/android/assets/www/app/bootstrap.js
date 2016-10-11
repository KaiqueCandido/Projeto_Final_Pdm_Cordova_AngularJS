(function() {
    'use strict';

    function initCordova(){
        document.addEventListener("deviceready", function () {
            console.info("Cordova inicializado com sucesso");
        }, false);
    }

    angular.module('app',['ngRoute', 'ngCordova'])
    .config(function($routeProvider)
    {

        $routeProvider
        .when('/', {
            templateUrl  : 'app/views/home.html',
            controller   : 'HomeController',
            controllerAs : 'Home'
        })
        .when('/image/:title', {
            templateUrl  : 'app/views/image.html',
            controller   : 'ImageController',
            controllerAs : 'Image'
        })
        .when('/photo', {
            templateUrl  : 'app/views/photo.html',
            controller   : 'PhotoController',
            controllerAs : 'Photo'
        })

        .otherwise ({ redirectTo: '/' });
    })
    .run(function(){

        initCordova();
    });
})();
