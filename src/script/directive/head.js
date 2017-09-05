/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').directive('appHead',function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/head.html'
    }
});