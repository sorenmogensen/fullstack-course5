(function(){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['$rootScope', 'items'];
function CategoriesController($rootScope, items){
  var $ctrl = this;
  var cancellers = [];

  $ctrl.items = items;

  $ctrl.$onInit = function(){
    var cancel = $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      console.log("Changing from " + fromState + " to " + toState);
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

