angular.module('mainService', [])

.service('mainConSvc', function($http, $window) {
    var restCall=this;
    
    restCall.getAllDetailsService = function (){
        return $http.get("http://localhost:9090/employee/details");
    }

   //var fff= this.getAllDetailsService();
  });


