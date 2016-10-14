(function () {
  'use strict';

  angular
    .module('app')
    .service('UserService', UserService);

  UserService.$inject = ['UserModel'];

  /* @ngInject */
  function UserService(UserModel) {
    var users = [
      new UserModel('Vasya', 'Ivanov', 'm'),
      new UserModel('Oksana', 'Dorosh', 'f'),
      new UserModel('Valery', 'Baleyko', 'm'),
      new UserModel('Сонечка', 'Савченко', 'f'),
      new UserModel('Irina', 'Savchenko', 'f'),
      new UserModel('Sofiya', 'Savchenko', 'f'),
      new UserModel('Katerina', 'Petrova', 'f'),
      new UserModel('Olga', 'tarasova', 'f'),
      new UserModel('Vadim', 'Tereshenko', 'm')
    ];

    this.getUserList = getUserList;
    this.addUser = addUser;

    ////////////////

    function getUserList() {
      return users;
    }

    function addUser(userData) {
      users.push(new UserModel(userData.firstName, userData.lastName, userData.gender));
    }
  }
})();

