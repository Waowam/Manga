'use strict';
angular.module('core.menu-button-directive', [])

.directive('menuButton', function() {
  return {
    restrict: 'A',
    scope: {},
    link: function (scope, element, attrs) {
      //TODO This directive represent mobile menu toggeling.
      // which will be totally modified soon.
    }
  };
}]);
