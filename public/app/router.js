angular.module('appRoutes', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : "app/views/pages/home.html"
    }).when('/dashbord',{
        templateUrl : "app/views/pages/dashboard.html"
    }).when('/about', {
        templateUrl : "app/views/pages/about.html",
        controller : 'MainCtrl',
        controllerAs : 'mainCon'
    }).otherwise({
        redirectTo: '/'
    });
    console.log("app.js  appRoutes");
});
