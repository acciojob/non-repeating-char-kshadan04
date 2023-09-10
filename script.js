function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = [];
	let n = str.length;
	for (let i = 0; i < 123; i++) {
	  arr.push(0);
	}
	
	for (let i = 0; i < n; i++) {
	  arr[str.charCodeAt(i)] = arr[str.charCodeAt(i)] + 1;
	}
	// console.log(arr);
	
	let ans = null;
	
	for (let i = 97; i < 123; i++) {
	  if (arr[i] == 1) {
	
	    ans = String.fromCharCode(i);
	    break;
	  }
	}
	return ans;

	
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
