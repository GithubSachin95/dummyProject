//let a =[1,5,0,5,7,10,91,9]

let bubble_sort = (a) =>{
	
	let swapp = false;
	let n= a.length-1;
	let x=a ;
	do{
		swapp = false;

		for(let i=0;i<n;i++){
			if(x[i]<x[i+1])
			{
				let temp = x[i];
				x[i] = x[i+1];
				x[i+1] = temp;
				swapp = true;
			}
	}n--;
}	while(swapp);
return x;

}

/*bubble_sort(a);
console.log(a);*/
