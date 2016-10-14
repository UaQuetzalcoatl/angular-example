(function () {
  'use strict';

  angular
    .module('app')
    .factory('UserModel', UserModel);

  /* @ngInject */
  function UserModel() {
    var Model = function (firstName, lastName, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
    };

    Model.prototype.getFullName = function () {
      return this.firstName + ' ' + this.lastName;
    };

    Model.prototype.getAge = function () {
      return this.gender === 'f' ? 'It\'s a secret' : Math.random(10, 99);
    };

    return Model;
  }
})();

