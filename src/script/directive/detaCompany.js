/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').directive('appDetaCompany',function () {
   return {
       restrict:'A',
       replace:true,
       scope:{
         com:'=com'
       },
       templateUrl:'view/template/detaCompany.html'
   }
});