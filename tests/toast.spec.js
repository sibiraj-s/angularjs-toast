angular.module('app', ['angularjsToast']);

describe('angularjs-toast', () => {
  let $compile;
  let $scope;
  let $timeout;
  let $verifyNoPendingTasks;

  let toast;

  beforeEach(module('app'));

  beforeEach(inject(($injector) => {
    const $rootScope = $injector.get('$rootScope');

    $compile = $injector.get('$compile');
    $timeout = $injector.get('$timeout');
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

  it('should create toast notification', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create('Hi there!');
    $scope.$digest();

    expect(element.text()).toContain('Hi there!');

    $timeout.flush();

    expect(element.text()).not.toContain('Hi there!');
  });

  it('should create toast notification with given classname', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create({ message: 'Hi there!', className: 'alert-danger' });
    $scope.$digest();

    expect(element.find('.alert-danger').length).toBe(1);
  });

  it('should remove notification after given timeout', () => {
    const template = '<toast></toast>';
    const element = $compile(template)($scope);

    const timeout = 18 * 1000;
    toast.create({ timeout, message: 'Hi there!' });
    $scope.$digest();

    expect(element.text()).toContain('Hi there!');

    $timeout.flush(timeout / 2);
    expect(element.text()).toContain('Hi there!');

    $timeout.flush(timeout);
    expect(element.text()).not.toContain('Hi there!');
  });

  it('should render with the given message', () => {
    const message = 'Hello World!';
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create(message);
    $scope.$digest();

    expect(element.text()).toContain(message);
  });

  it('should render muliple toast messages', () => {
    const message = 'Hello World!';
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create(message);
    $scope.$digest();
    toast.create(message);
    $scope.$digest();

    const notificationEl = element.find('li');
    expect(notificationEl.length).toBe(2);
  });

  it('should not have close button when dismissable is set to false', () => {
    const message = 'Hello World!';
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create({ message, dismissible: false });
    $scope.$digest();

    expect(element.find('.close').length).toBe(0);
  });

  it('should render HTML', () => {
    const message = 'Angularjs <b>toast</b>';
    const template = '<toast></toast>';
    const element = $compile(template)($scope);
    toast.create(message);
    $scope.$digest();

    expect(element.find('b').length).toBe(1);
    expect(element.find('b').text()).toBe('toast');
  });
});
