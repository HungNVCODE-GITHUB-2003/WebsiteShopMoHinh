var indexCart = 0;
var app = angular.module("myapp", ["ngRoute"]);
app.controller("myCtrl", function($scope, $rootScope, $routeParams, $http) {
    $scope.user = {};
    $scope.indexx = -1;
    $scope.prop = "Main";
    $scope.batdau = 0;
    $scope.clear = function() {
        $scope.user = {};
        $scope.indexx = -1;
    }
    $scope.insert = function() {
        $scope.dsUSERs.push(angular.copy($scope.user));
        $scope.clear();
    }
    $scope.update = function() {
        $scope.dsUSERs[$scope.indexx] = angular.copy($scope.user);
    }
    $scope.delete = function() {
        $scope.dsUSERs.splice($scope.indexx, 1);
        $scope.clear();
    }
    $scope.cancel = function() {
        if ($scope.indexx == -1) {
            $scope.clear();
        } else {
            $scope.edit($scope.indexx);
        }
    }
    $scope.edit = function(indexx) {
        $scope.indexx = indexx;
        $scope.user = angular.copy($scope.dsUSERs[indexx]);
    }
    $scope.dsUSERs = [

        {
            name: "Nguyễn Văn Hưng",
            email: "hung@gmail.com",
            password: 123
        },

        {
            name: "Nguyễn Quốc Toản",
            email: "toan@gmail.com",
            password: 123
        },

        {
            name: "Nguyễn Châu Bùi",
            email: "bui@gmail.com",
            password: 123
        },

        {
            name: "Nguyễn Văn Hưng",
            email: "hung@gmail.com",
            password: 123
        },
    ];
    $scope.sortBy = function(prop) {
        $scope.prop = prop;
    }
    $scope.addCart = function(p) {
        if (typeof $rootScope.cart == 'undefined') {
            $rootScope.cart = [];
        };
        $scope.countCart = $rootScope.cart.length;
        if ($rootScope.cart.filter(i => i.id == p.id).length == 0) {
            $rootScope.cart.push(p);
            $rootScope.cart[$scope.countCart].quantity = 1;
        }

    }
    $scope.addCart = function(d) {
        if (typeof $rootScope.cart == 'undefined') {
            $rootScope.cart = [];
        };
        $scope.countCart = $rootScope.cart.length;
        if ($rootScope.cart.filter(i => i.id == d.id).length == 0) {
            $rootScope.cart.push(d);
            $rootScope.cart[$scope.countCart].quantity = 1;
        }

    }
    $rootScope.TongTien = 0;
    if (typeof $rootScope.cart != 'undefined') {
        for (var i = 0; i < $rootScope.cart.length; i++) {
            $rootScope.TongTien = $rootScope.TongTien + $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
        }
    }
    $scope.SLtang = function(index) {
        $rootScope.cart[index].quantity = $rootScope.cart[index].quantity + 1;
        if (typeof $rootScope.cart != 'undefined') {
            $rootScope.TongTien = 0;
            for (var i = 0; i < $rootScope.cart.length; i++) {
                $rootScope.TongTien = $rootScope.TongTien + $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
            }
        }
    }
    $scope.SLgiam = function(index) {

        if ($rootScope.cart[index].quantity > 1) {
            $rootScope.cart[index].quantity = $rootScope.cart[index].quantity - 1;
        }

        // $rootScope.cart[index].quantity = $rootScope.cart[index].quantity + 1;
        if (typeof $rootScope.cart != 'undefined') {
            $rootScope.TongTien = 0;
            for (var i = 0; i < $rootScope.cart.length; i++) {
                $rootScope.TongTien = $rootScope.TongTien + $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
            }
        }
    }
    $scope.delProduct = function(index) {
        $rootScope.cart.splice(index, 1);
        if (typeof $rootScope.cart != 'undefined') {
            $rootScope.TongTien = 0;
            for (var i = 0; i < $rootScope.cart.length; i++) {
                $rootScope.TongTien = $rootScope.TongTien + $rootScope.cart[i].quantity * $rootScope.cart[i].Price;
            }
        }
    }
    $scope.products = [];
    $scope.productsSP = [];
    $scope.productsC = [];
    // $scope.dsUSERs = [];
    $http.get('product.json').then(function(reponse) {
        $scope.products = reponse.data;
    })
    $http.get('productDS.json').then(function(reponse) {
        $scope.productsSP = reponse.data;
    })
    $http.get('productCart.json').then(function(reponse) {
            $scope.productsC = reponse.data;
        })
        // $http.get('u.json').then(function(reponse) {
        //     $scope.dsUSERs = reponse.data;
        // })
    $scope.index = $routeParams.url;
    $scope.show = false;
    app.filter('between', function() {
        return function(input, min, max) {
            var output = [];
            for (i = 0; i < input.length; i++) {
                if (input[i] >= min && input[i] <= max) {
                    output.push(input[i]);
                }
            }
            return output;
        }
    });

});
// app.filter('isOdd', function() {
//     return function(numbers, condition) {
//         if (condition === 'odd') {
//             return numbers.filter(function(num) {
//                 return (num % 2) !== 0;
//             });
//         }

//         if (condition === 'even') {
//             return numbers.filter(function(num) {
//                 return (num % 2) === 0;
//             });
//         }

//         return numbers;
//     };
// });
app.config(function($routeProvider) {
    $routeProvider
        .when("/detail/:url", {
            templateUrl: "ChiTietSP.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/detail2/:url", {
            templateUrl: "ChiTietSP2.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/cart", {
            templateUrl: "cart.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/DSSP", {
            templateUrl: "DSSanPham.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/LienHe", {
            templateUrl: "LienHe.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/TinTuc", {
            templateUrl: "TinTuc.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/Account", {
            templateUrl: "Account.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/DangKy", {
            templateUrl: "DangKy.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/QuenMK", {
            templateUrl: "DoiMK.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/DoiMK", {
            templateUrl: "DoiMK.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/formVC", {
            templateUrl: "VanChuyen.html?" + Math.random(),
            controller: "myCtrl"
        })
        .when("/HSCN", {
            templateUrl: "AddUser.html?" + Math.random(),
            controller: "myCtrl"
        })
        .otherwise({
            templateUrl: "HomeSP.html?",
            controller: "myCtrl"
        })
});