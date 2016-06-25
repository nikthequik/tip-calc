angular.module("tipCalc", [])
.controller("mealCtrl", function($scope){
	var vm = this;
	vm.submit = function(){
		vm.sub = vm.bmp + (vm.bmp * (.01 * vm.taxRate));
		vm.tip = vm.bmp * (.01 * vm.tipPerc);
		vm.tipTotal += vm.tip;
		vm.tips.push(vm.tip);
		vm.total = vm.sub + vm.tip;
		vm.mealCount += 1;
		var sum = vm.tips.reduce(function(a, b){
			return a+b;
		});
		vm.atpm = sum / vm.mealCount;
		mdForm.reset();
		console.log(vm.tips);
	}
	vm.clear = function(){
		mdForm.reset();
	}
	vm.reset = function(){
		mdForm.reset();
		vm.sub = 0;
		vm.tip = 0;
		vm.total = 0;
		vm.tipTotal = 0;
		vm.mealCount = 0;
		vm.atpm = 0;
		vm.tips = [];
	}
	vm.sub = 0;
	vm.tip = 0;
	vm.total = 0;
	vm.tipTotal = 0;
	vm.mealCount = 0;
	vm.atpm = 0;
	vm.tips = [];
});

