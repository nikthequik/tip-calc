(function(){
	angular.module("tipCalc", ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'home.html',
			controller: 'mealCtrl as vm'
		})
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'mealCtrl as vm'
		})
		.when('/new-meal', {
			templateUrl: 'new-meal.html',
			controller: 'mealCtrl as vm'
		})
		.when('/my-earnings', {
			templateUrl: 'my-earnings.html',
			controller: 'mealCtrl as vm'
		})
		.when('/error', {
			templateUrl: 'error.html',
			controller: 'mealCtrl as vm'
		})
		.otherwise('/error')
	}]);
})();

