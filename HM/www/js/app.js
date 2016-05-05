// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova' ,'starter.controllers', 'starter.services',"starter.directives"])
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
        StatusBar.overlaysWebView(true);
        StatusBar.backgroundColorByHexString("#FF00FF");
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state(config.controllers.tabs.name, {
        url: config.controllers.tabs.url,
        abstract: true,
        templateUrl: config.controllers.tabs.templateUrl
      })

      // Each tab has its own nav history stack:

      .state(config.controllers.tabsHome.name, {
        url: config.controllers.tabsHome.url,
        views: {
          'tabs-home': {
            templateUrl: config.controllers.tabsHome.templateUrl,
            controller: config.controllers.tabsHome.controller
          }
        }
      })

      .state(config.controllers.tabsShopping.name, {
        url: config.controllers.tabsShopping.url,
        views: {
          'tabs-shopping': {
            templateUrl: config.controllers.tabsShopping.templateUrl,
            controller: config.controllers.tabsShopping.controller
          }
        }
      })

      .state(config.controllers.tabsMessage.name, {
        url: config.controllers.tabsMessage.url,
        views: {
          'tabs-message': {
            templateUrl: config.controllers.tabsMessage.templateUrl,
            controller: config.controllers.tabsMessage.controller
          }
        }
      })

      .state(config.controllers.tabsPersonal.name, {
        url: config.controllers.tabsPersonal.url,
        views: {
          'tabs-personal': {
            templateUrl: config.controllers.tabsPersonal.templateUrl,
            controller: config.controllers.tabsPersonal.controller
          }
        }
      })

      .state(config.controllers.publishSale.name,{
        url: config.controllers.publishSale.url,
        templateUrl:config.controllers.publishSale.templateUrl,
        controller:config.controllers.publishSale.controller
      })

      .state(config.controllers.publishShopping.name,{
        url: config.controllers.publishShopping.url,
        templateUrl:config.controllers.publishShopping.templateUrl,
        controller:config.controllers.publishShopping.controller
      })

      .state(config.shopDetail.name,{
        url: config.shopDetail.url,
        templateUrl:config.shopDetail.templateUrl,
        controller:config.shopDetail.controller
      })

      .state(config.controllers.searchHome.name,{
        url:config.controllers.searchHome.url,
        templateUrl:config.controllers.searchHome.templateUrl,
        controller:config.controllers.searchHome.controller
      })

      .state(config.controllers.productDetail.name,{
        url: config.controllers.productDetail.url,
        templateUrl:config.controllers.productDetail.templateUrl,
        controller:config.controllers.productDetail.controller,
        cache:'false',
      })
  });
