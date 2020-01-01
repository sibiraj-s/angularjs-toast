const config = ($toastProvider) => {
  $toastProvider.configure({
    maxToast: 4,
    containerClass: 'toast-wrapper',
    container: '#appendAlert',
    position: 'left',
  });
};

const mainController = ($scope, toast) => {
  const array = [
    'Lorem ipsum dolor cadet',
    'angularjs-toast',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    'another simple toast message',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  ];

  $scope.dismiss = false;
  const random = () => array[Math.floor(Math.random() * array.length)];

  $scope.toast = (cls) => {
    toast({
      className: cls,
      timeout: 5 * 1000,
      message: random(),
    });

    $scope.dismiss = true;
  };
};

config.$inject = ['$toastProvider'];
mainController.$inject = ['$scope', 'toast'];

const app = angular.module('myApp', ['angularjsToast']);
app.config(config);
app.controller('mainController', mainController);
