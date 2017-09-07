/**
 * Created by deepcam on 2017/8/14.
 */
angular.module('app').value('dict',{}).run(['$http','dict','$rootScope','$state',function ($http,dict,$rootScope,$state) {
    $rootScope.leftSwiper = function () {
        $state.go(window.history.forward())
    };
    $http.get('data/city.json').then(function (resp) {
        dict.city = resp.data;
    });
    $http.get('data/salary.json').then(function (resp) {
        dict.salary = resp.data;
    });
    $http.get('data/scale.json').then(function (resp) {
        dict.scale = resp.data;
    });
    $rootScope.rightSwiper = function () {
        $state.go(window.history.back())
    };
}]);