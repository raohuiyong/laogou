/**
 * Created by deepcam on 2017/8/14.
 */
angular.module('app').directive('appTab',function () {
    return {
        restrict:'A',
        replace:true,
        scope:{
            tabList:'=tabList',
            tabClick:'&tabClick',
            selectId:'@'
        },
        templateUrl:'view/template/searchTab.html',
        link:function (scope) {
            scope.selects = function (tab) {
                scope.selectId = tab.id;
                scope.tabClick(tab);
            }
        }
    }
});