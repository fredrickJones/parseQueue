'use strict';
var app = angular.module('parseQ');

app.service('parseService', function($http, $q) {
	this.postData = function(question) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question';
		var qObj = {
			'status': red,
			'text': question
		};

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
		var url = 'https://api.parse.com/1/classes/question';

		$http.get(url).then(function(resp) {
			// console.log(resp);
			var result = resp.data.results;
			deferred.resolve(resp);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

	this.updateData = function(obj) {
		var deferred = $q.defer();
		var url = 'https://api.parse.com/1/classes/question' + objectId;
		obj.status = 'yellow'

		$http.put(url, obj).then(function(resp) {
			deferred.resolve(resp);
			// console.log(resp);
		}, function(error) {
			deferred.reject(error);
		});

		return deferred.promise;
	};

});