(function (){

    var studentsFactory=function(){
        var students=[
            {
                id:1,
                name:"Mohammed abdleakrym",
                age:"15",
                classes:[
                    {
                        name:"math",
                        grade:"32"
                    },
                    {
                        name:"english",
                        grade:"25",
                    },
                    {
                        name:"physics",
                        grade:"21",
                    }
                ]
            },
            {
                id:2,
                name:"Ahmed Hassan",
                age:"12",
                classes:[
                    {
                        name:"math",
                        grade:"40"
                    },
                    {
                        name:"history",
                        grade:"30",
                    },
                    {
                        name:"physics",
                        grade:"10",
                    }
                ]
            },
            {
                id:3,
                name:"Kenneth George",
                age:"15",
                classes:[
                    {
                        name:"math",
                        grade:"40"
                    },
                    {
                        name:"philosiphie",
                        grade:"24",
                    }
                ]
            },
            {
                id:4,
                name:"Barbara Goue",
                age:"15",
                classes:[
                    {
                        name:"philosiphie",
                        grade:"19"
                    },
                    {
                        name:"english",
                        grade:"13",
                    },
                    {
                        name:"history",
                        grade:"23",
                    }
                ]
            },
        ];

        var factory={};

        factory.getStudents=function(){
            return students;
        };

        factory.getstudent=function(studentId){
            for(var i=0; i<students.length; i++)
                if(students[i].id === parseInt(studentId))return students[i];

            return {};
        };

        return factory;
    };

    angular.module('studentsApp').factory('studentsFactory',studentsFactory);

}());