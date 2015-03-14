
var studentsApp = angular.module('studentsApp',['ngRoute']);

studentsApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            controller:'studentsController as studentsCtr',
            controllerAs: 'studentsCtr',
            templateUrl:'app/views/students.html'
        })
        .when('/studentGrades/:studentId',{
            controller:'gradesController',
            controllerAs: 'gradesCtr',
            templateUrl:'app/views/grades.html'
        })
        .otherwise({redirectTo:'/'});
    ;

});
