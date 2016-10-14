(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserListController', UserListController);

  /** @ngInject */
  function UserListController(UserService, UserDetailsModal) {
    var vm = this;

    vm = angular.extend(vm, {
      getUsers: UserService.getUserList,
      showUserDetails: showUserDetails
    });


    function showUserDetails(user) {
      user.isShowed = true;
      UserDetailsModal.open(user);
    }

  }
})();
