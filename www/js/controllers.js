angular.module('app.controllers', [])

.controller('LoginController', ['$scope', '$state', '$stateParams',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams) {

   $scope.signIn = function(user) {
      console.log('Sign-In', user);
      $state.go('menu.products');
   };

}])

.controller('productsListController', ['$scope', '$state', '$stateParams', '$ionicActionSheet',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, $ionicActionSheet) {

   $scope.triggerActionSheet = function(id, title) {

      // $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      //   console.log('productsListController $stateChangeStart');
      // });

      // Show the action sheet
      var showActionSheet = $ionicActionSheet.show({
         buttons: [
            { text: '編集' },
            { text: 'プレビュー' },
            { text: 'コピー' }
         ],

         destructiveText: '削除',
         titleText: title,
         cancelText: 'キャンセル',

         cancel: function() {
            // add cancel code...
         },

         buttonClicked: function(index) {
            if (index === 0) {
               $state.go('menu.product_edit', { id: id });
            }

            if (index === 1) {
               // add edit 2 code
               alert('プレビュー');
            }

            if (index === 2) {
               // add edit 2 code
               alert('コピー');
            }
            return true;
         },

         destructiveButtonClicked: function() {
            // add delete code..
            alert('削除');
            return true;
         }
      });
   };

}])

.controller('productsEditController', ['$scope', '$stateParams',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('cloudCtrl', ['$scope', '$stateParams',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])

