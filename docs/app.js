const config = ($toastProvider) => {
  $toastProvider.configure({
    maxToast: 4,
    containerClass: 'toast-wrapper',
    container: '#appendAlert',
  });
};

const mainController = ($scope, toast) => {
  const array = [
    'Lorem ispsum',
    'Lorem ipsum dolor cadet',
    'angularjs-toast',
    'a simple toast message',
    'another simple toast message',
  ];

  $scope.dismiss = false;
  const random = () => array[Math.floor(Math.random() * array.length)];

  $scope.toast = (cls) => {
    toast({
      className: cls,
      duration: 5 * 1000,
      message: random(),
      position: 'left',
    });

    $scope.dismiss = true;
  };
};

config.$inject = ['$toastProvider'];
mainController.$inject = ['$scope', 'toast'];

const app = angular.module('myApp', ['angularjsToast']);
app.config(config);
app.controller('mainController', mainController);
