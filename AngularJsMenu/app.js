var app = angular.module("AngularJs-Menu", []);

app.controller("Controller", function ($scope) {

    $scope.aValue = function (value) {
        $scope.tab = value;
    }

    $scope.tabValue = function (value) {
        return $scope.tab == value;
    }

    $scope.items = ["Content 1", "Content 2", "Content 3", "Content 4"];

});