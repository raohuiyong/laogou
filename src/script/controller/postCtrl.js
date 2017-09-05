/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').controller('postCtrl',['$scope','$http','$state',function ($scope,$http,$state) {
    $http.get('data/company.json?id='+$state.params.id).then(function (resp) {
        $scope.com = resp.data;

    });
}]);