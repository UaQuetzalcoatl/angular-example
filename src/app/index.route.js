(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/user-list/user-list.html',
        controller: 'UserListController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
