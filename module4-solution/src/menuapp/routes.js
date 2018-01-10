(function(){

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/home-view.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/categories-view.template.html',
    //resolve: {
    //  items: ['MenuDataService', function(MenuDataService){
    //    return MenuDataService.getAllCategories();
    //  }]
    //}
  })

  $urlRouterProvider
  .otherwise('/');
}

})();
