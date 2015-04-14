var ARMS = angular.module('ARMS', []);

ARMS.controller('ARMSController', ['$scope', '$http', function (scope, http) {
	var url = 'http://api.data.gov/USDA/ERS/content/publications/'
	var type = 'types'
	var apiq = '?api_key=ZcN4Vl7QDLwUU4ixvKKZAiHIGmESjJl07ytlwHQN'
	var paramaters = '&alias=Oil_Crops_Outlook&size=20&start=0'
	var callback = '&callback=JSON_CALLBACK'
	http.jsonp(url + type + apiq + paramaters + callback).success(function(data) {
	scope.data = data;
	
	
  });
}]);
