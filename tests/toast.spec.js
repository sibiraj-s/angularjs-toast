angular.module('app', ['ngAnimate', 'ngSanitize', 'angularjsToast']);

describe('angularjs-toast', () => {
  let $rootScope;
  let toast;
  let $timeout;
  let $verifyNoPendingTasks;

  beforeEach(module('app'));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
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
    toast({ message: 'Hi there!' });
    $rootScope.$digest();

    const toastEl = document.querySelector('.angularjs-toast');
    expect(toastEl.textContent).toContain('Hi there!');
    expect(toastEl.querySelector('.close')).toBeTruthy();

    $timeout.flush();

    expect(toastEl.textContent).not.toContain('Hi there!');
  });

  it('should create toast notification with given classname', () => {
    toast({ message: 'Hi there!', className: 'alert-danger' });
    $rootScope.$digest();

    const toastEl = document.querySelector('.angularjs-toast');
    expect(toastEl.querySelector('.alert-danger')).toBeTruthy();
  });

  it('should remove notification after given timeout', () => {
    const timeout = 5 * 1000;
    toast({ timeout, message: 'Hi there!' });
    $rootScope.$digest();

    const toastEl = document.querySelector('.angularjs-toast');
    expect(toastEl.textContent).toContain('Hi there!');

    $timeout.flush(3 * 1000);
    expect(toastEl.textContent).toContain('Hi there!');

    $timeout.flush();
    expect(toastEl.textContent).not.toContain('Hi there!');
  });

  it('should render with the given message', () => {
    const message = 'Hello World!';
    toast({ message });
    $rootScope.$digest();

    const toastContainerEl = document.querySelector('.toast-container');
    expect(toastContainerEl.textContent).toContain(message);
  });

  it('should render muliple toast messages', () => {
    const message = 'Hello World!';
    toast({ message });
    $rootScope.$digest();
    toast({ message });
    $rootScope.$digest();

    const notificationEl = document.querySelectorAll('.angularjs-toast>ul>li');
    expect(notificationEl.length).toBe(2);
  });

  it('should not have close button when dismissable is set to false', () => {
    const message = 'Hello World!';
    toast({ message, dismissible: false });
    $rootScope.$digest();

    const notificationEl = document.querySelector('.angularjs-toast');
    expect(notificationEl.querySelector('.close')).toBeFalsy();
  });

  it('should create toast message when argument is a string', () => {
    toast('Hello World!');
    $rootScope.$digest();

    expect(document.querySelector('.angularjs-toast')).toBeTruthy();
    expect(document.querySelector('.angularjs-toast').textContent).toContain('Hello World!');
    expect(document.querySelector('.alert-success')).toBeTruthy();
  });
});
