var app = angular.module("myapp", []).controller("myctrl", function($scope) {
    $scope.prop = "Main";
    $scope.batdau = 0;
    $scope.carts = [];
    $scope.sortBy = function(prop) {
        $scope.prop = prop;
    }
    $scope.products = [

        {
            "image": "images/anh1SP.jpg",
            "name": "Tranh Anime Treo Tường Tráng Gương Led Điểm ONE PIECE",
            "price": 495.000,
        },

        {
            "image": "images/anh2SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT UCHIHA MADARA LỤC ĐẠO",
            "price": 890.000,
        },

        {
            "image": "images/anh3SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT LUFFY SNAKE MAN",
            "price": 295.000,
        },

        {
            "image": "images/anh4SP.jpg",
            "name": "MÔ HÌNH HOKAGE ĐỆ NHẤT HASHIRAMA",
            "price": 24990000.000,
        },

        {
            "image": "images/anh5SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT GOKU CƯỠI MÂY",
            "price": 215.000,
        },

        {
            "image": "images/anh6SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT MARCO ĐỨNG",
            "price": 145.000,
        },

        {
            "image": "images/anh7SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT ACE BẢN BÉ",
            "price": 395.000,
        },

        {
            "image": "images/anh8SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT ZORO TỨ RỒNG",
            "price": 290.000,
        },

        {
            "image": "images/anh9SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT ZORO TỨ RỒNG",
            "price": 290.000,
        },

        {
            "image": "images/anh1SP.jpg",
            "name": "TRANH GHÉP 5 CHỦ ĐỀ NARUTO",
            "price": 195.000,
        },

        {
            "image": "images/anh11SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT ZORO TỨ RỒNG",
            "price": 290.000,
        },

        {
            "image": "images/anh12SP.jpg",
            "name": "MÔ HÌNH NHÂN VẬT ZORO TỨ RỒNG",
            "price": 290.000,
        },



    ];

    $scope.add_cart = function(product) {
        if (product) {
            $scope.carts.push({
                image: product.image,
                name: product.name,
                price: product.price
            });
        }
    }

    $scope.total = 0;

    $scope.setTotals = function(cart) {
        if (cart) {
            $scope.total += cart.price;
        }
    }

    $scope.remove_cart = function(cart) {
        if (cart) {
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.price;
        }
    }

    $scope.chuyentrang = function(trang) {
        $scope.batdau = 5 * (trang - 1);
    }
    $scope.sotrang = function() {
            var sotrang = Math.ceil($scope.DsNhanVien.length / 5);
            var mang = [];
            for (let i = 1; i <= sotrang; i++) {
                mang.push(i);
            }
            return mang;
        }
        // app.filter('percentage', function($filter) {
        //     return function(input, decimals) {
        //         return $filter('number')(input * 100, decimals) + '%';
        //     }

    // });
    // app.filter('between', function() {
    //     return function(input, min, max) {
    //         var output = [];
    //         for (i = 0; i < input.length; i++) {
    //             if (input[i] >= min && input[i] <= max) {
    //                 output.push(input[i]);
    //             }
    //         }
    //         return output;
    //     }
    // });


});