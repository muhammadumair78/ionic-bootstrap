/**
 * @ngdoc controller
 * @name app.shell.controller:ShellCtrl
 * @description Shell controller
 */

(function(){

  'use strict';

  angular.module('app.shell')
    .controller('ShellCtrl', ShellCtrl);

  /* @ngInject */
  function ShellCtrl($ionicModal, $timeout, $scope){
    var vm = this;

    vm.loginData = {};

    vm.closeLogin = closeLogin;
    vm.login = login;
    vm.doLogin = doLogin;

    $ionicModal.fromTemplateUrl('src/auth/login.html', {
      scope: $scope
    }).then(function(modal) {
      vm.modal = modal;
    });

    function closeLogin() {
      vm.modal.hide();
    }

    function login() {
      vm.modal.show();
    }

    function doLogin() {
      console.log('Doing login', vm.loginData);
      $timeout(function() {
        vm.closeLogin();
      }, 1000);
    };


  }

}());
