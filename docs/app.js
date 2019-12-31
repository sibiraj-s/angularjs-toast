const app = angular.module('myApp', ['angularjsToast']);

app.controller('mainController', ['$scope', 'toast', ($scope, toast) => {
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
      containerClass: 'toast-wrapper',
      className: cls,
      duration: 5 * 1000,
      message: random(),
      position: 'left',
      container: '#appendAlert',
      maxToast: 4,
      insertFromTop: true,
    });

    $scope.dismiss = true;
  };
}]);
