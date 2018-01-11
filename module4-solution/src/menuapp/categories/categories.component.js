(function(){
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/categories/categories.html',
  bindings: {
    categories: '<'
  }
});

})();

