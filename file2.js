
module.exports = function make(...arguments) {
	let currentSum = [];
	arguments.reduce((previousValue, currentItem)=>{
		currentSum.push(currentItem);
	}, 0);
	function func(...arguments) {
		arguments.reduce((previousValue, currentItem)=>{
			currentSum.push(currentItem);
		}, 0);
		return func;
	}
	func.toString = function() {
		if((typeof currentSum[currentSum.length-1]) === "function" ){
			let callback = currentSum[currentSum.length-1];
			currentSum.length = currentSum.length-1;
			return currentSum.reduce(callback);}
	};
	return func;
};
