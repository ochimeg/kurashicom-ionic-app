angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('menu', {
            url: '/side-menu',
            templateUrl: 'templates/menu.html',
            abstract: true
        })

        .state('menu.login', {
            url: '/login',
            views: {
                'content@menu': {
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController'
                }
            }
        })

        .state('menu.products', {
            url: '/products',
            views: {
                'content@menu': {
                    templateUrl: 'templates/products.html',
                    controller: 'ProductsListController'
                }
            }
        })

        // .state('menu.products.create', {
        //     url: '/create',
        //     template: '<h1>create</h1>'
        //         views: {
        //             '': {
        //             templateUrl: 'templates/product_edit.html',
        //             controller: 'productsEditController'
        //         }
        //     }
        // })

        .state('menu.products.edit', {
            url: '/edit/:id',
            views: {
                'content@menu': {
                    templateUrl: 'templates/products_edit.html',
                    controller: 'ProductsEditController',
                    params: { id: null }
                }
            }
        })

        .state('menu.stocks', {
            url: '/stocks/list',
            views: {
                'content@menu': {
                    templateUrl: 'templates/stocks.html',
                    controller: 'cloudCtrl'
                }
            }
        });


    $urlRouterProvider.otherwise('/side-menu/login');

});
