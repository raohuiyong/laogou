/**
 * Created by deepcam on 2017/8/22.
 */
angular.module('app').directive('appHeadBar',function () {
    return {
        restrict:'A',
        replace:true,
        scope:{
          head:'@'
        },
        templateUrl:'view/template/headBar.html',
        link:function (scope) {
            scope.back = function () {
                window.history.back();
            }
        }
    }
});