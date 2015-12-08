// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'angularMoment'])
  .run(function($ionicPlatform, amMoment) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
    amMoment.changeLocale('de');
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.info', {
        url: '/info',
        views: {
          'menuContent': {
            templateUrl: 'templates/info.html'
          }
        }
      })

      .state('app.jobs', {
        url: '/jobs',
        views: {
          'menuContent': {
            templateUrl: 'templates/jobs.html',
            controller: 'JobsCtrl'
          }
        }
      })
      .state('app.mensa', {
        url: '/mensa',
        views: {
          'menuContent': {
            templateUrl: 'templates/mensa.html',
            controller: 'MensaCtrl'
          }
        }
      })

      .state('app.train', {
        url: '/train',
        views: {
          'menuContent': {
            templateUrl: 'templates/train.html',
            controller: 'TrainCtrl'
          }
        }
      })

      .state('app.events', {
        url: '/events',
        views: {
          'menuContent': {
            templateUrl: 'templates/events.html',
            controller: 'EventsCtrl'
          }
        }
      })
      .state('app.event', {
        url: '/events/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-detail.html',
            controller: 'EventDetailCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/mensa');
  });
