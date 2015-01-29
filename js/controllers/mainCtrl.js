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
			// console.log(resp);
			$scope.questionResponse = resp.data.results;
		}, function(err) {
			console.log(err);
		});
	};

	$scope.getData();

	setInterval(function() {
		$scope.getData();
	}, 250);

	$scope.changeStatus = function() {
		parseService.updateData().then(function() {
			
		})
	};

});