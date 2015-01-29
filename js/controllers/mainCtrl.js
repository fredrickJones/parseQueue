'use strict';
var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService) {
	$scope.postData = function() {
		parseService.postData($scope.question).then(function(resp) {

		});
		$scope.question = ' ';
	};

	$scope.getData = function() {
		parseService.getData().then(function(resp) {
			$scope.questionResponse = resp;
		});
	};

	$scope.getData();

});