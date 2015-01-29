'use strict';
var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {
	this.postData = function(question) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		var qObj = {
			'text': question
		}

		$http.post(url, qObj).then(function(resp) {
			deferred.resolve(resp);
			// console.log(resp);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

	this.getData = function() {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question?order=-createdAt';

		$http.get(url).then(function(resp) {
			var results = resp.data.config;
			deferred.resolve(results);
			console.log(results);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

});