//this creates the angular application
//  inject the ngRoute dependency in the module.
    var myApp = angular.module('myApp', ['ngRoute', 'ui.sortable']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/mainpage.html'
        })
        .when('/login',{
            templateUrl: 'partials/login.html'
        })
        .when('/register',{
            templateUrl: 'partials/register.html'
        })
        .when('/plan/:id', {
            templateUrl: 'partials/plan.html'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/edit.html'
        })

        .when('/userDashboard/:id', {
            templateUrl: 'partials/userdashboard.html'

        })
        .when('/globaldashboard', {
            templateUrl: 'partials/globaldashboard.html'
        })
        .when('/logout', {
            templateUrl: 'partials/mainpage.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
