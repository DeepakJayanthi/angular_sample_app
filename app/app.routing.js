angular.module("myApp").config(function ($routeProvider) {

    console.log($routeProvider);
    $routeProvider
    .when("/", {
        templateUrl: "app/components/home/home.html",
        controller:"homectrl"
    })
    .when("/Employee", {
        templateUrl : "app/components/employee/employee.html",
        controller : "empctrl"
    })
    .when("/pmbok", {
        templateUrl : "app/components/pmbok/pmbokmatrix.html",
        controller : "matrixctrl"
    }).when("/university", {
        templateUrl : "app/components/university/university.html",
        controller : "univctrl"
    });
});