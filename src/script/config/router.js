/**
 * Created by deepcam on 2017/8/11.
 */
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    //$stateProvider  配置状态
    $stateProvider.state('main',{ //路由的名字
        url:'/main', //路由的哈希值
        templateUrl:'view/main.html', //路由的模板
        controller:'mainCtrl' //路由的控制器
    }).state('position',{
        url:'/position/:id',
        templateUrl:'view/details.html',
        controller:'detailsCtrl'
    }).state('post',{
        url:'/post/:id',
        templateUrl:'view/post.html',
        controller:'postCtrl'
    }).state('search',{
        url:'/search',
        templateUrl:'view/search.html',
        controller:'searchCtrl'
    }).state('login',{
        url:'/login',
        templateUrl:'view/login.html',
        controller:'loginCtrl'
    }).state('register',{
        url:'/register',
        templateUrl:'view/register.html',
        controller:'registerCtrl'
    }).state('me',{
        url:'/me',
        templateUrl:'view/me.html',
        controller:'meCtrl'
    }).state('favorite',{
        url:'/favorite',
        templateUrl:'view/favorite.html',
        controller:'favoriteCtrl'
    }).state('send',{
        url:'/send',
        templateUrl:'view/send.html',
        controller:'sendCtrl'
    });
    //$urlRouterProvider  默认路由
    $urlRouterProvider.otherwise('main');
}]);