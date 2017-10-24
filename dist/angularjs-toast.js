/*!
 * @module angularjs-toast
 * @description A Simple toast notification service for AngularJS pages
 * @version v1.0.8
 * @link https://github.com/Sibiraj-S/angularjs-toast#readme
 * @licence MIT License, https://opensource.org/licenses/MIT
 */

(function() {
  'use strict';
  angular.module('angularjsToast', ['ngSanitize', 'ngAnimate']).factory('toast', ['$rootScope', '$http', '$templateCache', '$compile', '$timeout', function($rootScope, $http, $templateCache, $compile, $timeout) {

    /*
     * template
     */
    var container, dismissible, duration, emptyMessage, html, maxToast, position, scope, templateBase, toast, toastClass;
    templateBase = 'angularjs-toast.html';
    html = '<div class="angularjs-toast" ng-class="$toastPlace ? \'position-fixed\' : \'position-relative\'">' + '  <ul class="toast-container" ng-class="[$position, $masterClass]">' + '    <li class="animate-repeat" ng-repeat="data in $toastMessages track by data.id">' + '      <div class="alert alert-dismissible" ng-class="::$toastClass">' + '        <span ng-bind-html="data.message"></span>' + '        <a href="#" class="close" data-dismiss="alert" aria-label="close" title="close" ng-click="$close($index)" ng-if="$dismissible">×</a>' + '      </div>' + '    </li>' + '  </ul>' + '</div>';

    /*
     * put html into template cache
     */
    $templateCache.put(templateBase, html);

    /*
     * default params
     */
    container = document.querySelector('body');
    duration = 5000;
    dismissible = true;
    emptyMessage = "Hi there!";
    maxToast = 6;
    position = 'right';
    toastClass = 'alert-success';

    /*
     * scope defaults
     */
    scope = $rootScope.$new();
    scope.$toastMessages = [];

    /*
     * toast function
     */
    return toast = function(args) {

      /*
       * user parameters
       */
      var htmlTemplate, json, pushToArray, timeout;
      args.duration = args.duration ? args.duration : duration;
      args.maxToast = args.maxToast ? args.maxToast : maxToast;
      args.insertFromTop = args.insertFromTop ? args.insertFromTop : true;
      args.removeFromTop = args.removeFromTop ? args.removeFromTop : false;
      args.container = args.container ? document.querySelector(args.container) : container;

      /*
       * values that bind to HTML
       */
      scope.$position = args.position ? args.position : position;
      scope.$toastPlace = args.container === container ? true : false;
      scope.$masterClass = args.masterClass ? args.masterClass : '';
      scope.$toastClass = args.className ? args.className : toastClass;
      scope.$dismissible = args.dismissible ? args.dismissible : dismissible;
      scope.$message = args.message ? args.message : emptyMessage;

      /*
       * check if templates are present in the body
       * append to body
       */
      htmlTemplate = angular.element(document.getElementsByClassName('angularjs-toast'));
      if (!htmlTemplate[0]) {

        /*
         * if the element is not appened to html
         * get default template from ->templateBase
         * append to ->args.container
         */
        $http.get(templateBase, {
          cache: $templateCache
        }).then(function(response) {

          /*
           * compile the element
           * append default template to the ->templateBase
           */
          var templateElement;
          templateElement = $compile(response.data)(scope);
          angular.element(args.container).append(templateElement);
        });
      }

      /*
       * remove element besed on time interval ->args.duration
       */
      timeout = function(element) {
        $timeout(function() {
          var index;
          index = scope.$toastMessages.indexOf(element);
          if (index !== -1) {
            scope.$toastMessages.splice(index, 1);
          }
        }, args.duration);
      };

      /*
       * append inputs to json variable
       * this will be pushed to the ->scope.$toastMessages array
       */
      json = {
        message: args.message,
        id: new Date().getUTCMilliseconds(),
        count: 1
      };

      /*
       * push elements to array
       */
      pushToArray = function() {
        if (args.insertFromTop) {
          scope.$toastMessages.unshift(json);
        } else {
          scope.$toastMessages.push(json);
        }
        timeout(json);
      };

      /*
       * remove last/ first element from ->scope.$toastMessages when the maxlength is reached
       * default maxlength is 6
       */
      if (scope.$toastMessages.length === args.maxToast) {
        if (args.removeFromTop) {
          scope.$toastMessages.shift();
        } else {
          scope.$toastMessages.pop();
        }
        pushToArray();
      } else {
        pushToArray();
      }

      /*
       * close selected element
       * remove ->$index element from ->scope.toastMessages
       */
      scope.$close = function(index) {
        scope.$toastMessages.splice(index, 1);
      };
    };
  }]);

}).call(this);
