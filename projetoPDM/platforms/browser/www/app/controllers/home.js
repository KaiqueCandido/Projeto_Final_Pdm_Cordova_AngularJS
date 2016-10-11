(function() {
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$injector = ['$scope'];

    function HomeController($scope){
        
        $scope.msg = "Pictures";
        $scope.images = [];

        galleryAPI.getMedia('Camera', function(items){
          for(var i = items.length; i >= 0; i--){
            $scope.images.push(items[i]);
          }
        }, function(error){alert(error);});
    }
})();
