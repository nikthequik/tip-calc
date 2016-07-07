(function(){
	angular.module("tipCalc")
	.controller("mealCtrl", function($scope, mealSvc, $rootScope){
		var vm = this;
		vm.root = $rootScope;
		vm.submit = function(){
			vm.root.meal = mealSvc.calcTip(vm.bmp, vm.taxRate, vm.tipPerc);
			vm.root.earnings.tipTotal += vm.root.meal.tip;
			vm.root.earnings.tips.push(vm.root.meal.tip);
			vm.root.earnings.avgTip = mealSvc.avgTip(vm.root.earnings.tips);
			vm.clear();
        	window.document.getElementById('baseMP').focus();
      
		};
		vm.clear = function(){
			mdForm.reset();
			vm.bmp = ""; 
			vm.taxRate = ""; 
			vm.tipPerc = "";
		}
		vm.reset = function(){
			vm.root.meal = mealSvc.resetMeal();
			vm.root.earnings = mealSvc.resetEarnings();
		}
		if (!vm.root.meal) {
			vm.reset();
		}
		
	});
})();