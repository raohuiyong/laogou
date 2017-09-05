/**
 * Created by deepcam on 2017/8/16.
 */
angular.module('app').controller('loginCtrl',['$scope','$http','$state','cache',function ($scope,$http,$state,cache) {
    $scope.submit = function () {
      $http.post('data/login.json',$scope.user).success(function (resp) {
         cache.put('id',resp.data.id);
         cache.put('name',resp.data.name);
         cache.put('image',resp.data.image);
          $state.go('main');
      })
    };
}]);