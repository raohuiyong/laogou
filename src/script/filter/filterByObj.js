/**
 * Created by deepcam on 2017/8/15.
 */
angular.module('app').filter('filterByObj',function () {
   return function (list, obj) {  //返回一个函数（接收的数组，接收的对象）
        var result = [];
       angular.forEach(list,function (item) {
            var isEqual = true;
            for(var i in obj){
                if(item[i]!==obj[i]){
                    isEqual = false;
                }
            }
            if (isEqual){
                result.push(item);
            }
        });
       return result;
   }
});