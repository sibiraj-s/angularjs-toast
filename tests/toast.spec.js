angular.module('app', ['ngAnimate', 'ngSanitize', 'angularjsToast']);

describe('angularjs-toast', () => {
  let $rootScope;
  let $window;
  let toast;
  let $timeout;

  // Load the myApp module, which contains the directive
  beforeEach(module('app'));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $window = $injector.get('$window');
    $timeout = $injector.get('$timeout');

    toast = $injector.get('toast');
  }));

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create toast notification', () => {
    toast({
      duration: 1 * 1000,
      message: 'Hi there!',
      className: 'alert-success',
    });

    $rootScope.$digest();

    const toastContainer = $window.document.getElementsByClassName('angularjs-toast')[0];
    expect(toastContainer.textContent).toContain('Hi there!');

    $timeout.flush();

    expect(toastContainer.textContent).not.toContain('Hi there!');
  });

  it('should create toast notification with given classname', () => {
    toast({
      duration: 1 * 1000,
      message: 'Hi there!',
      className: 'alert-success',
    });

    $rootScope.$digest();

    const toastContainer = $window.document.getElementsByClassName('angularjs-toast')[0];
    expect(toastContainer.getElementsByClassName('alert-success')[0]).toBeTruthy();
    $timeout.flush();
  });
});
