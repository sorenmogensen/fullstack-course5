(function(){
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['RegistrationService'];
function InfoController(RegistrationService){
  var ctrl = this;
  ctrl.service = RegistrationService;
}

})();

