//anninumous fucntion wrapper

(function() {

    var studentsController = function ($scope, studentsFactory) {
        //write the logic here
        var students = {};
        this.sortBy='id';
        this.reverse=true;

        function init(){
            students = studentsFactory.getStudents();
        };

        init();
        this.students = students;

        this.doSort = function(propertyType){
            this.sortBy = propertyType;
            this.reverse=!this.reverse;
        }

    };

    studentsController.$inject = ['$scope', 'studentsFactory'];

    angular.module("studentsApp").controller("studentsController", studentsController);

}());