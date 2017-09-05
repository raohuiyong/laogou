/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').directive('appDetaInfo',['$http',function ($http) {
   return {
       restrict:'A',
       replace:true,
       templateUrl:'view/template/detaInfo.html',
       scope:{
           isActive:'=isActive',
           isLogin:'=isLogin',
           pos:'=pos'
       },
       link:function (scope) {
           scope.imagePath = scope.isActive ? 'image/star-active.png' : 'image/star.png';
           scope.favorite = function () {
               $http.post('data/favorite.json',{id:scope.pos.id,select:scope.pos.select}).success(function (resp) {
                   scope.isActive = !scope.isActive;
                   scope.imagePath = scope.isActive?'image/star-active.png':'image/star.png';
               })
           };
       }
   }
}]);