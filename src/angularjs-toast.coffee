'use strict'

getUniqId = ->
  s4 = -> (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  "#{new Date().getTime()}-#{s4()}-#{s4()}-#{s4()}"

$run = ($templateCache) ->

  containerHTML = '<div class="angularjs-toast">'+
  '  <ul class="toast-container" ng-class="::[position, containerClass]">'+
  '    <toast-message ng-repeat="data in toastMessages track by data.id" data="data"></toast-message>'+
  '  </ul>'+
  '</div>'

  messageHTML = '<li class="animate-repeat">'+
  '  <div class="alert alert-dismissible" ng-class="::data.toastClass">'+
  '    <span ng-bind-html="::data.message"></span>'+
  '    <span'+
  '      class="close"'+
  '      aria-label="close"'+
  '      title="close"'+
  '      ng-click="close($index)"'+
  '      ng-if="::data.dismissible"'+
  '      >×</span>'+
  '  </div>'+
  '</li>'

  $templateCache.put 'angularjs-toast/container.html', containerHTML
  $templateCache.put 'angularjs-toast/message.html', messageHTML
  return

$toastProvider = ->
  defaultOptions =
    containerClass: ''
    defaultToastClass: 'alert-success'
    timeout: 5 * 1000
    dismissible: true
    maxToast: 7
    position: 'right'
    insertFromTop: true

  options = defaultOptions
  toastMessages = []

  destroy = (index) ->
    toastMessages.splice(index, 1)
    return

  create = (args) ->
    # user options
    message = if typeof args is 'string' then args else args.message
    timeout = args.timeout or options.timeout
    dismissible = if args.dismissible isnt undefined then args.dismissible else options.dismissible
    toastClass = args.className or options.defaultToastClass

    if not message
      throw new Error "Toast message is required..."

    # append inputs to json variable
    # this will be pushed to the ->scope.$toastMessages array
    json =
      message: message
      id: getUniqId()
      toastClass: toastClass
      dismissible: dismissible
      timeout: timeout

    # remove last/ first element from ->scope.$toastMessages when the maxlength is reached
    if toastMessages.length is options.maxToast
      if not options.insertFromTop then toastMessages.shift() else toastMessages.pop()

    # push elements to array
    if options.insertFromTop then toastMessages.unshift(json) else toastMessages.push(json)
    # setNotificationTimer(json, timeout)
    return

  configure: (c) ->
    options = angular.extend {}, defaultOptions, c
    return

  $get: ->
    options: options
    toastMessages: toastMessages
    create: create
    destroy: destroy

$toastContainerDirective = (toast) ->
  replace: true
  restrict: 'EA'
  templateUrl: 'angularjs-toast/container.html'
  scope: {}
  compile: ->
    options = toast.options

    (scope) ->
      scope.toastMessages = toast.toastMessages
      scope.position = options.position
      scope.containerClass = options.containerClass
      return

$toastMessageDirective = ($timeout, toast) ->
  replace: true
  restrict: 'E'
  templateUrl: 'angularjs-toast/message.html'
  scope:
    data: '='
  link: (scope) ->
    data = scope.data
    options = toast.options
    timeout = data.timeout or options.timeout
    toastMessages = toast.toastMessages

    destroy = ->
      index = toastMessages.indexOf data
      toast.destroy(index)
      return

    scope.close = destroy

    timeoutPromise = $timeout ->
      destroy()
      return
    , timeout

    scope.$on '$destroy', ->
      $timeout.cancel timeoutPromise
      return

    return

$run.$inject = ['$templateCache']
$toastProvider.$inject = []
$toastContainerDirective.$inject = ['toast']
$toastMessageDirective.$inject = ['$timeout', 'toast']

angular.module 'angularjsToast', ['ngSanitize', 'ngAnimate']
  .run $run
  .provider 'toast', $toastProvider
  .directive 'toast', $toastContainerDirective
  .directive 'toastMessage', $toastMessageDirective
