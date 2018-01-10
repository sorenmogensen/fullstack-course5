(function(){
'use strict';

angular.module('MenuApp')
.controller('DebugController', DebugController);

DebugController.$inject = ['$rootScope'];
function DebugController($rootScope){
  var $ctrl = this;
  var cancellers = [];

  $ctrl.$onInit = function(){
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log("Starting change to "+toState.name+" ("+toState.url+")");
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      console.log("Successful change to "+toState.name+" ("+toState.url+")");
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("Failed to change to "+toState.name+" ("+toState.url+"):", error);
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function(){
    cancellers.forEach(function(item){
      item();
    });
  };

}

})();
