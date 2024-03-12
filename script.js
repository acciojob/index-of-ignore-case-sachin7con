function indexOfIgnoreCase(s1, s2) {
  //SGN  write your code here
	let s1L = s1.toLowerCase();
	let s2L = s2.toLowerCase();
	
	if(s1L.includes(s2L)){
		
		return s1L.indexOf(s2L);
	}else {
		return -1;
	}
	

}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
