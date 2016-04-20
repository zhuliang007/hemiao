// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tabs', {
        url: '/tabs',
        abstract: true,
        templateUrl: 'templates/tabs/hm-tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tabs.home', {
        url: '/home',
        views: {
          'tabs-home': {
            templateUrl: 'templates/tabs/hm-tabs-home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tabs.buy', {
        url: '/buy',
        views: {
          'tabs-buy': {
            templateUrl: 'templates/tabs/hm-tabs-buy.html',
            controller: 'BuyCtrl'
          }
        }
      })

      .state('tabs.message', {
        url: '/message',
        views: {
          'tabs-message': {
            templateUrl: 'templates/tabs/hm-tabs-message.html',
            controller: 'MsgCtrl'
          }
        }
      })

      .state('tabs.personal', {
        url: '/personal',
        views: {
          'tabs-personal': {
            templateUrl: 'templates/tabs/hm-tabs-personal.html',
            controller: 'PersonalCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    //$urlRouterProvider.otherwise('/tab/dash');

  });
