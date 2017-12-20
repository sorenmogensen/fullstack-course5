(function(){
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var to_buy = this;
  to_buy.items = ShoppingListCheckOffService.getToBuyItems();
  to_buy.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;
  var to_buy_items = [
    {name:"Cookies", quantity:6},
    {name:"Packs of Coffee", quantity:2},
    {name:"Coffee Filters", quantity:40},
    {name:"Bread", quantity:1},
    {name:"Cheese", quantity:1},
    {name:"Bag of Xochitl Chips", quantity:2},
    {name:"Xochitl Chipotle Salsa", quantity:1}
  ];
  var bought_items = [];

  service.getBoughtItems = function(){
    return bought_items;
  }
  service.getToBuyItems = function(){
    return to_buy_items;
  }
  service.addToBought = function(item, index){
    bought_items.push(item);
  }
  service.buyItem = function(itemIndex){
    var items = to_buy_items.splice(itemIndex, 1);
    items.forEach(service.addToBought);
  }
}

})();
