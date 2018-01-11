(function(){
'use strict';

angular.module('MenuApp')
.config(routerConfig);

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerConfig($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/home/home.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories/categories.html',
    controller: 'CategoriesController',
    controllerAs: 'categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/items/items.html',
    controller: 'ItemsController',
    controllerAs: 'itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  });

  $urlRouterProvider.otherwise('/');
}

})();

