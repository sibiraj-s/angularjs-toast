angular.module('app', ['ngAnimate', 'ngSanitize', 'angularjsToast']);

describe('angularjs-toast', () => {
  let $rootScope;
  let $window;
  let toast;
  let $timeout;
  let $verifyNoPendingTasks;

  beforeEach(module('app'));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $window = $injector.get('$window');
    $timeout = $injector.get('$timeout');
    $verifyNoPendingTasks = $injector.get('$verifyNoPendingTasks');

    toast = $injector.get('toast');
  }));

  afterEach(() => {
    try {
      $verifyNoPendingTasks('$timeout');
    } catch {
      $timeout.flush();
    }
  });

  it('should create toast notification', () => {
    toast({
      duration: 1 * 1000,
      message: 'Hi there!',
      className: 'alert-success',
    });

    $rootScope.$digest();

    const toastContainer = $window.document.querySelector('.angularjs-toast');
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

    const toastContainer = $window.document.querySelector('.angularjs-toast');
    expect(toastContainer.querySelector('.alert-success')).toBeTruthy();
  });

  it('should remove after given duration', () => {
    const duration = 5 * 1000;
    toast({
      duration,
      message: 'Hi there!',
    });

    $rootScope.$digest();

    const toastContainer = $window.document.querySelector('.angularjs-toast');
    expect(toastContainer.textContent).toContain('Hi there!');
    $timeout.flush(3 * 1000);
    expect(toastContainer.textContent).toContain('Hi there!');
    $timeout.flush();
    expect(toastContainer.textContent).not.toContain('Hi there!');
  });

  it('should set the position property correctly', () => {
    let toastContainer;

    toast({
      duration: 1000,
      message: 'Hi there!',
      position: 'right',
    });

    $rootScope.$digest();

    toastContainer = $window.document.querySelector('.toast-container');
    expect(toastContainer.className).toContain('right');

    $timeout.flush();

    toast({
      duration: 1000,
      message: 'Hi there!',
      position: 'left',
    });

    $rootScope.$digest();

    toastContainer = $window.document.querySelector('.toast-container');
    expect(toastContainer.className).toContain('left');
  });

  it('should append to the given container', () => {
    const container = $window.document.createElement('div');
    container.id = '__toast_container__';
    $window.document.body.appendChild(container);

    toast({
      duration: 1000,
      message: 'Hi there!',
      container: '#__toast_container__',
    });

    $rootScope.$digest();

    expect(container.querySelector('.angularjs-toast')).toBeTruthy();
    $window.document.body.removeChild(container);

    const container2 = $window.document.createElement('div');

    toast({
      duration: 1000,
      message: 'Hi there!',
      container: container2,
    });

    $rootScope.$digest();

    expect(container2.querySelector('.angularjs-toast')).toBeTruthy();
  });
});
