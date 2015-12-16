var myapp = angular.module('myapp', ["ui.router"]);

myapp.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/")

  $stateProvider
    // Umagnet state
    .state('umagnet', {
      abstract: true,
      resolve: {
        appConfig: function($http) {
          console.log('resolve1');
          return {
            data: 'teste'
          };
        },
        doAuthorize: function(appConfig) {
          console.log('resolve2');
        }
      },
      views: {
        'header': {
          templateUrl: 'views/header.html',
          controller: 'HeaderController'
        },
        'footer':{
          templateUrl: 'views/footer.html',
          controller: 'FooterController'
        }
      }
    })
    // Operator state
    .state('umagnet.operator', {
      url: "/",
      views: {
        'container@': {
          templateUrl: "views/operator.html",
          controller: 'OperatorController'
        }
      }
    })
    // Client state
    .state('umagnet.client', {
      views: {
        'container@': {
          templateUrl: "views/client.html",
          controller: 'ClientController'
        }
      }
    })
    // Call state
    .state('umagnet.call', {
      views: {
        'container@': {
          templateUrl: "views/call.html",
          controller: 'CallController'
        },
        'user@umagnet.call': {
          template: "USER",
          controller: function(){ console.log('user'); }
        },
        'reasons@umagnet.call': {
          template: "REASONS",
          controller: function(){ console.log('reasons'); }
        },
        'questions@umagnet.call': {
          template: "QUESTIONS",
          controller: function(){ console.log('questions'); }
        }
      }
    })
});
