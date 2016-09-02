angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('menu.dashboard', {
    url: '/dashboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.products', {
    url: '/products',
    views: {
      'side-menu21': {
        templateUrl: 'templates/products.html',
        controller: 'productsListController'
      }
    }
  })

  // .state('menu.products.create', {
  //   url: '/create',
  //   template: '<h1>create</h1>'
  //   // views: {
  //   //   '': {
  //   //     templateUrl: 'templates/product_edit.html',
  //   //     controller: 'productsEditController'
  //   //   }
  //   // }
  // })

  .state('menu.edit', {
    url: '/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/products_edit.html',
        controller: 'productsEditController',
        params: {'id' : null}
      }
    }
  })

  .state('menu.stocks', {
    url: '/stocks/list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/stocks.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/dashboard')



});
