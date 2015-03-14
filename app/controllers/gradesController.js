

(function() {

    var gradesController = function ($scope, studentsFactory, $routeParams) {
        var grades = {};
        this.sortBy = "grade";
        this.reverse=true;

        function init(){
            var studentId = $routeParams.studentId;
            grades=studentsFactory.getstudent(studentId).classes;
            console.log(grades+ "  "+studentId);
        }

        init();
        this.grades=grades;

        this.doSort = function(sortBy){
            this.sortBy = sortBy;
            this.reverse = !this.reverse;
        }
    };

    gradesController.$inject=['$scope','studentsFactory','$routeParams'];

    angular.module("studentsApp").controller('gradesController',gradesController);
}());