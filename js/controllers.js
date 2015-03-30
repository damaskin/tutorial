/**
 * Created by Ivan on 30.03.2015.
 */
'use strict';

/* Controllers */

var RaynorApp = angular.module('RaynorApp', []);

RaynorApp.controller('RaynorCont', function($scope) {

    $scope.title = 'Phones';

    $scope.phones = [
        {"name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S.",
            "status": false,
            "priority": 1},
        {"name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation tablet.",
            "status": true,
            "priority": 2},
        {"name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation tablet.",
            "status": false,
            "priority": 3}
    ];

    var date = new Date();

    $scope.today = date;

    $scope.doneAddFilter = function(phoneItem) {
        return phoneItem.name ;
    };

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function(fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    };

    $scope.isSortUp = function(fieldName) {
        return $scope.sortField === fieldName && !$scope.reverse;
    };
    $scope.isSortDown = function(fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    };

});