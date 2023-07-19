// var app = angular.module("myapp", ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider
//         .when("/home", {
//             templateUrl: "trangchutesst.html?" + Math.random(),

//         })

//     .otherwise({
//         redirectTo: "/home"
//     });
// });


// app.run(function($rootScope) {

//     $rootScope.$on('$routeChangeStart', function() {
//         $rootScope.loading = true;
//     });
//     $rootScope.$on('$routeChangeSuccess', function() {
//         $rootScope.loading = false;
//     });
//     $rootScope.$on('$routeChangeError', function() {
//         $rootScope.loading = true;
//         alert("Lỗi tải template");
//     });
// });