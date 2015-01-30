'use strict';
var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService) {
	$scope.queue = [];

	var getParseQ = function() {
		parseService.getQueue()
			.then(function(data) {
				$scope.queue = data;
			});
	};
	getParseQ();

	$scope.postToQueue = function() {
		parseService.postQueue($scope.question)
			.then(function() {
				getParseQ();
				$scope.question = '';
			});
	};

	$scope.changeQueue = function(objData) {
		parseService.updateQueue(objData)
			.then(function() {
				getParseQ();
			});
	};

	$scope.delFromQ = function(questionObj) {
		parseService.delFromQ(questionObj)
			.then(function() {
				getParseQ();
			});
	};

});