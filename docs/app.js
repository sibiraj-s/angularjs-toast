const config = (toastProvider) => {
  toastProvider.configure({
    maxToast: 4,
    position: 'left',
  });
};

const mainController = ($scope, toast) => {
  const array = [
    'Lorem ipsum dolor cadet',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    'Yet another simple <b>toast</b> message',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua.`,
  ];

  $scope.dismiss = false;
  const random = () => array[Math.floor(Math.random() * array.length)];

  $scope.toast = (cls) => {
    toast.create({
      className: cls,
      message: random(),
    });

    $scope.dismiss = true;
  };
};

config.$inject = ['toastProvider'];
mainController.$inject = ['$scope', 'toast'];

const app = angular.module('myApp', ['angularjsToast']);
app.config(config);
app.controller('mainController', mainController);
