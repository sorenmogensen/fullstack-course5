(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {
    restrict: 'E',
    scope: {
      items: '<foundItems',
      remove: '&onRemove'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'myCtrl',
    bindToController: true,
    templateUrl: 'foundItems.html'
  }
  return ddo;
}

function FoundItemsDirectiveController(){
  var myCtrl = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var ctrl = this;

  ctrl.searchTerm = '';
  ctrl.found = null;

  ctrl.doSearch = function(){
    if(ctrl.searchTerm){
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
      .then(function(response){
        console.log(response);
        ctrl.found = response;
      });
    }else{
      ctrl.found = [];
    }
  }

  ctrl.removeItem = function(index){
    console.log('removing: '+index);
    ctrl.found.splice(index, 1);
  }

  ctrl.nothingFound = function(){
    return (ctrl.found instanceof Array) && ctrl.found.length == 0;
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    searchTerm = searchTerm.toLowerCase();
    return $http({
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result){
      var foundItems = [];
      var menuItems = result.data.menu_items;
      for (var i=0;i<menuItems.length;i++){
        var menuItem = menuItems[i];
        if(menuItem.description.toLowerCase().indexOf(searchTerm) !== -1){
          foundItems.push(menuItem);
        }
      }
      return foundItems;
    });
  }
}

})();

