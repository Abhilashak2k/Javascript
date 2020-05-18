//Divide and conquer approach divides a problem into smaller but similar subproblems and tackles 
//them followed by combining to get the final solution. Binary search is an example of this approach.


function recursiveBinarySearch ( arr, n, left, right ){

  if(left>right) //Base condition
    return -1;

  let mid = Math.floor((left+right)/2); //Divide array into two
  
    if( arr[mid] === n )
      return mid;
    if(arr[mid] > n)   
      return recursiveBinarySearch(arr, n, left, mid-1); 
    else
      return recursiveBinarySearch(arr, n, mid+1, right);

}

//Main code

let arr = [4, 6, 7, 12, 23, 156, 678, 900, 1222];
recursiveBinarySearch(arr, 5, 0, arr.length-1)===-1?console.log("Element not found\n"):console.log("Element found!");
