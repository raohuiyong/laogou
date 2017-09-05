/**
 * Created by deepcam on 2017/8/17.
 */
angular.module('app').config(['$validationProvider',function ($validationProvider) {
    //匹配方法
    var expression = {
        //手机号
        phone:/^1[\d]{10}/,  //正则表达式的方式
        password:function (value) {  //函数的方式
            var v = value+'';
            return v.length > 5
        },
        required:function (value) {
            return !!value;
        }
    };
    //匹配失败
    var defaultMsg = {
        phone:{
            success:'',
            error:'必须是11位手机号'
        },
        password:{
            success:'',
            error:'长度至少6位'
        },
        required:{
            success:'',
            error:'不能为空'
        }
    };
    $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
}]);