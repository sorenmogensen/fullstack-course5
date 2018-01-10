(function(){
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/categoryList.template.html',
  bindings: {
    items: '<'
  }
});

})();
