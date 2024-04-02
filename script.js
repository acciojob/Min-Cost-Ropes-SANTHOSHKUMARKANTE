function mincost(arr)
{ 
//write your code here
	let arr2 = {};
	arr.sort();//{2,3,4,6}
	let len = arr.length;//4
	while(len!=1){
		let sum = arr[0]+arr[1];//5 9 15
		arr2.put(sum);/{5} {5,9} {5,9,15}
		arr = arr.splice(0,2,sum);//{5,4,6} {9,6} {15}
		arr.sort();//{4,5,6} {6,9} {15}
		len--;//3 2 1
	}
	let res = 0;
	for (let index = 0; index < arr2.length; index++) {
		res+=arr2[index];
	}
	return res;
	




	
// return the min cost
  
}

module.exports=mincost;
