(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdSidenav, $log) {
    var vm = this;
    vm.toggleLeftMenu = function(){
      $mdSidenav('left').toggle();
      $log.info();
    };

  }
})();
