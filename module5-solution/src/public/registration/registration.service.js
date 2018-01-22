(function(){
'use strict';

angular.module('public')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = ['$http', 'ApiPath'];
function RegistrationService($http, ApiPath){
  var service = this;
  service.firstname = "";
  service.lastname = "";
  service.email = "";
  service.phone = "";
  service.dish = "";

  service.getMenuItem = function(short_name){
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

  service.getImageSrc = function(short_name){
    return ApiPath + '/images/' + short_name + '.jpg';
  };

  service.registerDetails = function(ctrl){
    service.firstname = ctrl.firstname;
    service.lastname = ctrl.lastname;
    service.email = ctrl.email;
    service.phone = ctrl.phone;
    service.menu_item = ctrl.menu_item;
  };
}

})();
