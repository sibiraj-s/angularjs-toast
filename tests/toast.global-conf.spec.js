const app = angular.module('appGlobal', ['angularjsToast']);

const maxToast = 4;
const defaultTimeout = 5 * 1000;

const config = (toastProvider) => {
  toastProvider.configure({
    maxToast,
    timeout: defaultTimeout,
    containerClass: 'toast-wrapper',
    defaultToastClass: 'alert-success',
    dismissible: true,
    insertFromTop: true,
    position: 'right',
  });
};

config.$inject = ['toastProvider'];
app.config(config);

describe('angularjs-toast', () => {
  let $scope;
  let $compile;
  let toast;
  let $timeout;
  let $verifyNoPendingTasks;

  beforeEach(module('appGlobal'));

  beforeEach(inject(($injector) => {
    const $rootScope = $injector.get('$rootScope');
    $timeout = $injector.get('$timeout');
    $compile = $injector.get('$compile');
    $verifyNoPendingTasks = $injector.get('$verifyNoPendingTasks');
    $scope = $rootScope.$new();

    toast = $injector.get('toast');
  }));

  afterEach(() => {
    // cleanup pending timers
    try {
      $verifyNoPendingTasks('$timeout');
    } catch {
      $timeout.flush();
    }
  });

  it(`should have only maximum ${maxToast} toasts`, () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);

    toast.create({ message: 'Hi there!' });
    $scope.$digest();
    toast.create({ message: 'Hi there!' });
    $scope.$digest();
    toast.create({ message: 'Hi there!' });
    $scope.$digest();
    toast.create({ message: 'Hi there!' });
    $scope.$digest();
    toast.create({ message: 'Hi there!' });
    $scope.$digest();
    toast.create({ message: 'Hi there!' });
    $scope.$digest();

    expect(element.find('li').length).toBe(4);
  });

  it(`should remove after ${defaultTimeout} seconds`, () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create('Hi there!');
    $scope.$digest();

    $timeout.flush(defaultTimeout);

    expect(element.find('li').length).toBe(0);
  });

  it('should add containerClass to the container', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create('Hi there!');
    $scope.$digest();

    expect(element.find('.toast-wrapper').length).toBe(1);
  });

  it('should have configured toast class', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create('Hi there!');
    $scope.$digest();

    expect(element.find('.alert-success').length).toBe(1);
  });

  it('should be dismissible by default', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create('Hi there!');
    $scope.$digest();

    const closeEl = element.find('li .close');
    expect(closeEl.length).toBe(1);
    expect(closeEl.text()).toBe('×');
  });

  it('should insert new notifications on top', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);

    toast.create('Hi there!');
    $scope.$digest();

    toast.create('Hello there!');
    $scope.$digest();

    expect(element.find('li')[0].textContent).toContain('Hello there!');
  });

  it('should remove notifications from bottom when max toasts exceeded', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);

    toast.create('Hello there!');
    $scope.$digest();
    toast.create('Hi there!');
    $scope.$digest();
    toast.create('Hi there!');
    $scope.$digest();
    toast.create('Hi there!');
    $scope.$digest();
    toast.create('Hi there!');
    $scope.$digest();

    const notificationsEl = element.find('li');
    expect(notificationsEl[notificationsEl.length - 1].textContent).not.toContain('Hello there!');
  });

  it('should have default position', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);

    toast.create('Hello there!');
    $scope.$digest();

    expect(element.find('.toast-container').hasClass('right')).toBe(true);
  });
});
