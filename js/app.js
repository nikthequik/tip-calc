(function(){
	angular.module("tipCalc", ['ngRoute', 'ngAnimate'])
	.run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path("/error");
        });
        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
          $timeout(function() {
            $rootScope.isLoading = false;
          }, 1000);
        });
    }])
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

