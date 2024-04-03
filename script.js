function mincost(arr)
{ 
//write your code here
	let arr2 = {};
	arr.sort((a,b) => a-b);//{2,3,4,6}
	let len = arr.length;//4
	while(arr.length>1){
		let sum = arr[0]+arr[1];//5 9 15
		arr2.push(sum);//{5} {5,9} {5,9,15}
		arr = arr.splice(2);//{5,4,6} {9,6} {15}
		arr.push(sum);
		arr.sort((a,b) => a-b);//{4,5,6} {6,9} {15}
	}
	let res = 0;
	for (let index = 0; index < arr2.length; index++) {
		res+=arr2[index];
	}
	return res;
	




	
// return the min cost
  
}

module.exports=mincost;
