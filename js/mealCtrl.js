(function(){
	angular.module("tipCalc")
	.controller("mealCtrl", function($scope, mealSvc){
		var vm = this;
		vm.submit = function(){
			vm.meal = mealSvc.calcTip(vm.bmp, vm.taxRate, vm.tipPerc);
			vm.earnings.tipTotal += vm.meal.tip;
			vm.earnings.tips.push(vm.meal.tip);
			vm.earnings.avgTip = mealSvc.avgTip(vm.earnings.tips);
			mdForm.reset();
			
        	window.document.getElementById('baseMP').focus();
      
		};
		vm.clear = function(){
			mdForm.reset();
		}
		vm.reset = function(){
			vm.meal = mealSvc.resetMeal();
			vm.earnings = mealSvc.resetEarnings();
		}
		vm.reset();
	});
})();