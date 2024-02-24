(function (){
   'use strict';

   angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function  LunchCheckController($scope) {
       $scope.menu = "";
       $scope.msg = "";

       $scope.splitMenu = function () {
           let menu = $scope.menu;
           menu = menu.replace(/\s/g, "");
           let list = menu.split(",")
           let cleanList = list.filter(Boolean);
           if(cleanList.length > 3){
               $scope.msg = "Too much!";
           } else {
               $scope.msg = "Enjoy!";
           }
       }


   }
})();
