(function() {
  'use strict';

  angular
    .module('workshopWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
