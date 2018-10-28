function sumOfOther(array){
	let sum = 0;
	for(let i = 0; i < array.length; i++){
		sum += array[i];
	}
	const arr=[];
	for(let i = 0; i < array.length; i++){
		arr[i]=sum-array[i];
	}
	return arr;
}