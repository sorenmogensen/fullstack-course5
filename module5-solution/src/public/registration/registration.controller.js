(function(){
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['RegistrationService'];
function RegistrationController(RegistrationService){
  var reg = this;
  reg.firstname = "";
  reg.lastname = "";
  reg.email = "";
  reg.phone = "";
  reg.dish = "";
  reg.menu_item = null;
  reg.registered = false;

  reg.submit = function(e){
    e.preventDefault();
    RegistrationService.getMenuItem(reg.dish).then(function(data){
      reg.menu_item = data;
      RegistrationService.registerDetails(reg);
      reg.registered = true;
    }, function(error){
      reg.menu_item = null;
    });
  };
}

})();

