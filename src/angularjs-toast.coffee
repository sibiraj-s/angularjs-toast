'use strict'

$toast = ($rootScope, $http, $templateCache, $compile, $timeout) ->
  # template
  templateBase = './angularjs-toast.html'

  html = '<div class="angularjs-toast" ng-class="$toastPlace ? \'position-fixed\' : \'position-relative\'">' +
  '  <ul class="toast-container" ng-class="[$position, $containerClass]">' +
  '    <li class="animate-repeat" ng-repeat="data in $toastMessages track by data.id">' +
  '      <div class="alert alert-dismissible" ng-class="::$toastClass">'  +
  '        <span ng-bind-html="data.message"></span>' +
  '        <a' +
  '          href="javascript:void(0)"' +
  '          class="close"' +
  '          data-dismiss="alert"' +
  '          aria-label="close"'+
  '          title="close"' +
  '          ng-click="$close($index, data.id)"'+
  '          ng-if="$dismissible"' +
  '          >×</a' +
  '        >' +
  '      </div>' +
  '    </li>' +
  '  </ul>' +
  '</div>'

  # put html into template cache
  $templateCache.put(templateBase, html)

  # default params
  container = document.querySelector('body')
  duration = 5000
  dismissible = true
  maxToast = 6
  position = 'right'
  toastClass = 'alert-success'

  # scope defaults
  scope = $rootScope.$new()
  scope.$toastMessages = []

  timeoutPromises = {}

  cleanupToastContainer = ->
    if scope.$toastMessages.length is 0
      angular.element(document.querySelector('.angularjs-toast')).remove()

  # toast function
  toast = (args) ->

    if not args.message
      throw new Error "Invalid Message."

    # user parameters
    args.duration = args.duration or duration
    args.maxToast = args.maxToast or maxToast
    args.insertFromTop = args.insertFromTop or false
    args.removeFromTop = args.removeFromTop or false
    args.container = args.container or container

    # values that bind to HTML
    scope.$position = args.position or position
    scope.$toastPlace = if args.container is container then true else false
    scope.$containerClass = args.containerClass or ''
    scope.$toastClass = args.className or toastClass
    scope.$dismissible = if args.dismissible isnt undefined then args.dismissible else dismissible
    scope.$message = args.message

    # check if templates are present in the body
    # append to body
    htmlTemplate = angular.element(document.getElementsByClassName 'angularjs-toast')

    if not htmlTemplate[0]
      # if the element is not appened to html
      # get default template from ->templateBase
      # append to ->args.container
      $http.get templateBase, {cache: $templateCache}
        .then (response) ->

          # compile the element
          # append default template to the ->templateBase
          templateElement = $compile(response.data)(scope)

          if angular.isElement args.container
            el = args.container
          else
            el = document.querySelector(args.container)

          angular.element(el).append templateElement
          return

    # remove element besed on time interval ->args.duration
    timeout = (msgObj) ->
      timeoutPromises[msgObj.id] = $timeout ->
        index = scope.$toastMessages.indexOf(msgObj)
        if index isnt -1
          scope.$toastMessages.splice(index, 1)

        cleanupToastContainer()
        return
      , args.duration
      return

    # append inputs to json variable
    # this will be pushed to the ->scope.$toastMessages array
    json =
      message: args.message
      id: "#{new Date().getUTCMilliseconds()}-#{Math.floor((Math.random() * 100) + 1)}"

    # push elements to array
    pushToArray = ->
      if args.insertFromTop then scope.$toastMessages.unshift(json) else scope.$toastMessages.push(json)
      timeout(json)
      return

    # close selected element
    # remove ->$index element from ->scope.toastMessages
    scope.$close = (index, id) ->
      $timeout.cancel timeoutPromises[id]
      delete timeoutPromises[id]
      scope.$toastMessages.splice(index, 1)
      cleanupToastContainer()
      return

    # remove last/ first element from ->scope.$toastMessages when the maxlength is reached
    # default maxlength is 6
    if scope.$toastMessages.length is args.maxToast
      if args.removeFromTop then scope.$toastMessages.shift() else scope.$toastMessages.pop()
      pushToArray()
    else
      pushToArray()

    return

$toast.$inject = ['$rootScope', '$http', '$templateCache', '$compile', '$timeout']

angular.module 'angularjsToast', ['ngSanitize', 'ngAnimate']
  .factory 'toast', $toast
