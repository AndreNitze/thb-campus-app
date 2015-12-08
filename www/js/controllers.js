angular
    .module('starter.controllers', [
        'angular.filter'
    ])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        'use strict';
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };
    })
    .controller('MensaCtrl', function ($scope, $http) {
        $http.get('https://mobile-quality-research.org/services/meals/v2/')
          .success(function (days) {
            $scope.meals = days.days[0].meals;
            $scope.date = days.days[0].date;
        });
    })

    .controller('ClubCtrl', function ($scope, $http) {
        $http.get('https://mobile-quality-research.org/services/events/list.php')
          .success(function (days) {
            $scope.meals = days.days[0].meals;
            $scope.date = days.days[0].date;
          });
      })

    .controller('JobsCtrl', function ($scope, $http) {
        $http.get('https://mobile-quality-research.org/services/servify/parse.php?url=http://www.careerservice-fhb.de/de/jobboerse/')
          .success(function (jobs) {
            $scope.jobs = jobs[0];
          });
      })
      .controller('TrainCtrl', function ($scope, $http) {
        $scope.departures = {
            0: "13:47",
            1: "13:59"
        };
    })

    .controller('EventsCtrl', function($scope, $stateParams, $http) {
      $http.get('https://mobile-quality-research.org/services/events/list.php')
        .success(function (events) {
          $scope.events = events;
        });
    });
