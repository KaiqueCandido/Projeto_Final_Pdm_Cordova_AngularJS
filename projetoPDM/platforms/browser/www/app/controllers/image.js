(function() {
    'use strict';

    angular.module('app').controller('ImageController', ImageController);
    
    ImageController.$injector = ['$scope', '$routeParams'];

    function ImageController($scope, $routeParams){

        galleryAPI.getMedia('Camera', function(items){
            for(var i = 0; i <= items.length; i++){
                if(items[i].title == $routeParams.title){
                    $scope.media = items[i];
                    break;
                }
            }
        }, function(error){alert(error);});
    }
})();
