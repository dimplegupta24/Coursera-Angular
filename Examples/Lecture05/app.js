(function () {
    'use strict'
    
        angular.module('myFirstApp',[])
        .controller('MyFirstController',function ($scope) {
           $scope.name="Hunny" ;
           $scope.sayHello = function () {
             return "Hello Coursera!";  
           };
        });
    
    })();
    