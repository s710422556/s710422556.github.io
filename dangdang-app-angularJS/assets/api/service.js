app.factory('commonService',['$http',function($http){
  var service ={};

  service.getData =function(type,callBack){
    $http({
      url:'/dangdang-app-angularJS/data/book-'+type+'.json',
      method:'get'
    })
    .then(function(res){
      console.log('成功');
      callBack(res);
    }),function(err){
      console.dir(err);
    }
  };
}]);
