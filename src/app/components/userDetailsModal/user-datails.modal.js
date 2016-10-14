(function () {
  'use strict';

  angular
    .module('app')
    .factory('UserDetailsModal', UserDetailsModal);

  UserDetailsModal.$inject = ['$mdDialog'];

  /* @ngInject */
  function UserDetailsModal($mdDialog) {
    var service = {
      open: open
    };

    return service;

    ////////////////

    function open(user) {
      $mdDialog.show({
        locals: { user: user},
        templateUrl: 'app/components/userDetailsModal/user-details.html',
        controller: function ($scope, $mdDialog, user) {
          $scope.user = user;
          $scope.close = function () {
            $mdDialog.hide();
          };
        }

      });
    }
  }

})();


