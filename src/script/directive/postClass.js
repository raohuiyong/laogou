/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').directive('appPostClass',function () {
   return {
       restrict:'A',
       replate:true,
       templateUrl:'view/template/postClass.html',
       scope:{
           com:'=com'
       },
       link:function (scope, jqlite, attrs) {
           scope.showPositionList = function (id) {
               scope.positionList = scope.com.positionClass[id].positionList;
               scope.isActive = id;
           };
           scope.$watch('com',function (newValue) {
               if(newValue) scope.showPositionList(0);
           });

       }
   }
});