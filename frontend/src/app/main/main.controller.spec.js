(function() {
  'use strict';

  describe('controllers', function(){
    var vm, $mdSidenav, $log;

    $mdSidenav = jasmine.createSpy().and.returnValue({
      toggle: jasmine.createSpy()
    });

    $log = {
      info: jasmine.createSpy()
    };

    beforeEach(module('frontend'));
    beforeEach(inject(function(_$controller_) {


      vm = _$controller_('MainController', {

        $mdSidenav: $mdSidenav,
        $log: $log

      });

    }));

    it('should toggle left menu', function() {
      vm.toggleLeftMenu();
      expect($mdSidenav).toHaveBeenCalledWith('left');
    });

    it('should log toggle left menu', function() {
      vm.toggleLeftMenu();
      expect($log.info).toHaveBeenCalled();
    });

  });
})();
