/**
 * Created by deepcam on 2017/8/14.
 */
angular.module('app').directive('appSheet',function () {
   return {
       restrict:'A',
       replace:true,
       scope:{
         list:'=',
         visible:'=',
         select:'&'
       },
       templateUrl:'view/template/sheet.html',
       link:function (scope) {

       }
   }
});