/**
 * Created by deepcam on 2017/8/16.
 */
angular.module('app').controller('favoriteCtrl',['$scope','$http',function ($scope,$http) {
    $http.get('data/myFavorite.json').then(function (resp) {
       $scope.list = resp.data;
    });
}]);