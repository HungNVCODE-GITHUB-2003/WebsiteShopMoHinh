var app = angular.module("myapp", []).controller("myctrl", function($scope) {
    $scope.isLogin = false;
    $scope.dsUSER = [

        // {
        //     name: "Nguyễn Văn Hưng",
        //     email: "hung@gmail.com"
        // },

        // {
        //     name: "Nguyễn Quốc Toản",
        //     email: "toan@gmail.com"
        // },

        // {
        //     name: "Nguyễn Châu Bùi",
        //     email: "bui@gmail.com"
        // },

        // {
        //     name: "Nguyễn Văn Hưng",
        //     email: "hung@gmail.com"
        // },
    ];

    $scope.add_user = function() {
        $scope.dsUSER.push($scope.user);
        $scope.user = null;

    }

});