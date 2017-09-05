/**
 * Created by deepcam on 2017/8/16.
 */
angular.module('app').controller('registerCtrl',['$scope','$http','$interval','$state',function ($scope,$http,$interval,$state) {
    $scope.submit = function () {
        console.log(arguments);
        $http.post('data/regist.json',$scope.user).success(function (resp) {
            console.log(resp.data);
        })
    };
    var count = 60;
    $scope.send = function () {
      $http.get('data/code.json').then(function (resp) {
         if(resp.data.state === 1){
             $scope.time = '60s';
             var interval = $interval(function () {
                 if(count<=0){
                     $interval.cancel(interval);
                     $scope.time = '';
                     count = 60;
                     return false;
                 }else{
                    count--;
                    $scope.time = count + 's';
                 }

             },1000);
         }
      });
    };
}]);