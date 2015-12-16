var myapp = angular.module('myapp');

myapp.controller('HeaderController', function() {
  console.log('header');
});


myapp.controller('FooterController', function() {
  console.log('footer');
});


myapp.controller('OperatorController', function($state, doAuthorize) {
  console.log('operator');
  $state.go('umagnet.client');

});

myapp.controller('ClientController', function($state, appConfig) {
  console.log('client');
  $state.go('umagnet.call');
});

myapp.controller('CallController', function($state) {
  console.log('call');  
});
