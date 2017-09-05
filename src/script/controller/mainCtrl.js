/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').controller('mainCtrl',['$scope','$http','cache',function ($scope,$http,cache) {
    $http.get('data/positionList.json').then(function (resp) {
        $scope.list = resp.data;
    });
    if(cache.get('name')){
        var da = new Date().getHours();
        var send = '';
        if(da < 8){
            send = '早上好！';
        }else if(da < 12){
            send = '上午好！';
        }else if(da < 18){
            send = '下午好！';
        }else if(da < 13){
            send = '晚上好！';
        }
        $scope.name= send + cache.get('name');
    }
}]);