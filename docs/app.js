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
      masterClass: 'masterClass',
      className: cls,
      duration: 5000,
      message: random(),
      position: 'left',
      container: '#appendAlert',
      maxToast: 4,
      insertFromTop: true,
    });

    $scope.dismiss = true;
  };
}]);
