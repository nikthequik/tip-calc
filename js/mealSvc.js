(function(){
	angular.module("tipCalc")
	.service("mealSvc", function(){
		return {
			avgTip: avgTip,
			calcTip: calcTip,
			resetEarnings: resetEarnings,
			resetMeal: resetMeal
		};	

		function avgTip(tips){
			var sum = tips.reduce(function(a, b){
				return a+b;
			});
			return sum / tips.length;
		}

		function calcTip(bmp, taxRate, tipPerc){
			var sub = bmp + (bmp * (.01 * taxRate));
			var tip = bmp * (.01 * tipPerc);
			var total = sub + tip;
			return {tip: tip, sub: sub, total: total};
		}

		function resetEarnings(){
			return {
				tips : [],
				tipTotal : 0,
				avgTip : 0
			};
		}

		function resetMeal(){
			return {
				sub : 0,
				tip : 0,
				total : 0
			};
		}
	});
})();