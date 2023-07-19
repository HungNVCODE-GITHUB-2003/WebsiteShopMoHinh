var app = angular.module("myapp", []).controller("myctrl", function($scope) {
    $scope.user = {};
    $scope.index = -1;
    $scope.clear = function() {
        $scope.user = {};
        $scope.index = -1;
    }
    $scope.insert = function() {
        $scope.dsUSERs.push(angular.copy($scope.user));
        $scope.clear();
    }
    $scope.update = function() {
        $scope.dsUSERs[$scope.index] = angular.copy($scope.user);
    }
    $scope.delete = function() {
        $scope.dsUSERs.splice($scope.index, 1);
        $scope.clear();
    }
    $scope.cancel = function() {
        if ($scope.index == -1) {
            $scope.clear();
        } else {
            $scope.edit($scope.index);
        }
    }
    $scope.edit = function(index) {
        $scope.index = index;
        $scope.user = angular.copy($scope.dsUSERs[index]);
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
});