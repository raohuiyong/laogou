angular.module('app').controller('detailsCtrl',['$scope','$http','$state','$q','cache',function ($scope,$http,$state,$q,cache) {
    $scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin?'投个简历':'登录';
    //$q 解决ajax回调地狱，用于多个异步请求变同步
    function getPosition() {
        var def = $q.defer();  //申明一个延迟加载对象
        $http.get('data/position.json?id='+$state.params.id).then(function (resp) {
            $scope.position = resp.data;
            if(resp.data.posted){
                $scope.message = '已投递';
            }
            def.resolve(resp.data);  //执行成功的函数
        },function (err) {
            def.reject(err);  //执行失败的函数
        });
        return def.promise;  //返回延迟加载对象的返回值
    }
    function getCompany(id) {
        $http.get('data/company.json?id='+id).then(function (resp) {
            $scope.com = resp.data;
        })
    }
    getPosition().then(function (resp) {
        //接收执行成功的函数
        getCompany(resp.companyId);
    },function (err) {
        //接收执行失败的函数
    });
    $scope.go = function () {
        if($scope.message !== '已投递'){
            if($scope.isLogin){
                $http.post('data/handle.json',{id:$scope.position.id}).success(function (resp) {
                    console.log(resp.data);
                    $scope.message = '已投递';
                })
            }else{
                $state.go('login');
            }
        }
    };

}]);