'use strict';
angular.module('core', [])

.directive('menu', ['$document', function($document) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl : '/modules/core/directives/menu.client.directive.html',
  /*  link: function (scope, element, attrs) {
      var ulElement = element.find('ul');
      if (ulElement.hasClass('open')) {
          ulElement.removeClass('open');
          ulElement.find('li').removeClass('open');
          //ulElement.find('ul').slideUp();
        }
        else {
          ulElement.addClass('open');
          //ulElement.children('ul').slideDown();
          //ulElement.siblings('li').children('ul').slideUp();
          ulElement.siblings('li').removeClass('open');
          ulElement.siblings('li').find('li').removeClass('open');
          //ulElement.siblings('li').find('ul').slideUp();
        }
        // scope.mafunct = function () {
        //   console.log("je suis ici!");
        // };
    }*/

  };
}]);
