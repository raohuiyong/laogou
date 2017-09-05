/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').directive('appDetaHead',function () {
   return {
       restrict:'A',
       replace:true,
       templateUrl:'view/template/detaHead.html',
       scope:{
           text:'@text'

       },
       link:function (scope,jq,attrs) {
           scope.back = function () {
               window.history.back();
           };
       }
   }
});