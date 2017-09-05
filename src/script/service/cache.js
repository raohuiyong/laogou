/**
 * Created by deepcam on 2017/8/13.
 */
/*
angular.module('app').service('cache',['$cookies',function ($cookies) {
    this.put = function (key,value) {
        $cookies.put(key,value);  //创建一个cookies
    };
    this.get = function (key) {
        return $cookies.get(key);  //获取cookies值
    };
    this.remove = function (key) {
        $cookies.remove(key);  //删除一个cookies
    }
}]);*/

angular.module('app').factory('cache',['$cookies',function ($cookies) {
    return {
        put:function (key, value) {
            $cookies.put(key,value);  //创建一个cookies
        },
        get:function (key) {
            return $cookies.get(key);
        },
        remove:function (key) {
            $cookies.remove(key);
        }
    }
}]);