const app = angular.module('appGlobal', ['ngAnimate', 'ngSanitize', 'angularjsToast']);

const maxToast = 4;
const defaultTimeout = 5 * 1000;

const config = ($toastProvider) => {
  $toastProvider.configure({
    maxToast,
    timeout: defaultTimeout,
    container: 'body',
    containerClass: 'toast-wrapper',
    defaultToastClass: 'alert-success',
    dismissible: true,
    insertFromTop: true,
    position: 'right',
  });
};

config.$inject = ['$toastProvider'];
app.config(config);

describe('angularjs-toast', () => {
  let $rootScope;
  let toast;
  let $timeout;
  let $verifyNoPendingTasks;

  beforeEach(module('appGlobal'));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $timeout = $injector.get('$timeout');
    $verifyNoPendingTasks = $injector.get('$verifyNoPendingTasks');

    toast = $injector.get('toast');
  }));

  afterEach(() => {
    // cleanup pending timers
    try {
      $verifyNoPendingTasks('$timeout');
    } catch {
      $timeout.flush();
    }

    // reset template
    document.body.innerHTML = '';
  });

  it(`should have only maximum ${maxToast} toasts`, () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const notificationsEl = document.querySelectorAll('.angularjs-toast>ul>li');
    expect(notificationsEl.length).toBe(4);
  });

  it(`should remove after ${defaultTimeout} seconds`, () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    $timeout.flush(defaultTimeout);

    const notificationEl = document.querySelectorAll('.angularjs-toast>ul>li');
    expect(notificationEl.length).toBe(0);
  });

  it('should append to document body', () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const toastEl = document.body.querySelector('.angularjs-toast');
    expect(toastEl).toBeTruthy();
  });

  it('should add containerClass to the container', () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const toastContainerEl = document.querySelector('.toast-wrapper');
    expect(toastContainerEl).toBeTruthy();
  });

  it('should have configured toast class', () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const notificationEl = document.querySelector('.alert-success');
    expect(notificationEl).toBeTruthy();
  });

  it('should be dismissible by default', () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const closeEl = document.querySelector('.close');
    expect(closeEl).toBeTruthy();
    expect(closeEl.textContent).toBe('×');
  });

  it('should insert new notifications on top', () => {
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    toast({ message: 'Hello there!' });
    $rootScope.$digest();

    const notificationsEl = document.querySelectorAll('.angularjs-toast>ul>li');
    expect(notificationsEl[0].textContent).toContain('Hello there!');
  });

  it('should remove notifications from bottom when max toasts exceeded', () => {
    toast({ message: 'Hello there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const notificationsEl = document.querySelectorAll('.angularjs-toast>ul>li');
    expect(notificationsEl[notificationsEl.length - 1].textContent).not.toContain('Hello there!');
  });

  it('should have default position', () => {
    toast({ message: 'Hello there!' });
    $rootScope.$digest();

    const toastContainerEl = document.querySelector('.toast-container');
    expect(toastContainerEl.className).toContain('right');
  });
});
