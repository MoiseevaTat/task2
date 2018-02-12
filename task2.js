// Given two numbers A and B, where (A <B).
// Display all integer numbers in interval from A to B (including borders).
// Display all odd integer values located in the numerical interval from A to B.

// var a=1, b=10;

// function displayAll(a, b) {
// 	var arr = [], i = 0;
// 	while (a <= b) {
// 		arr[i] = a++;
// 		i++;
// 	}
// 	return  arr;
// }	

// console.log(displayAll (a, b));

// function displayOdd(a, b) {
// 	var arr = [], i = 0;
// 	while (a < b) {
// 			if (++ a % 2 !== 0) {
// 				arr[i] = a++;
// 				i++;	
// 			}
// 	}
// 	return  arr;
// }

// console.log(displayOdd (a,b));



// // Write a program that will calculate the factorial of N, using the do-while loop.

// var n=4;
// function calcFactorial(n) {
// 	var result = n;
// 	while(n!==1) { 
//     	result = result *  (n-1);
// 		--n;
// 	}
// 	return result; 
// }

// console.log(calcFactorial (n));



// // Using the loops, draw in the browser with spaces (& nbsp) and asterisks (*):
// // · Rectangle
// // · Right triangle
// // · Equilateral triangle
// // · Rhombus.

// var n = 6, m = 6;
// function drawRectangle(n) {
// 	var str='';
// 	for (var i = 0; i <= n; i++) {
		
// 		if ((i===0) || (i=== n)) {
// 			for (var j = 0; j <= n; j++) {
// 				str = str +'*';
// 			}
// 		}

// 		else {
			
// 			for (var j = 0; j <= n; j++) {
// 				if ((j === 0) || (j === n)) {
// 					str = str + '*';
// 				}
// 				else {
// 					str = str + ' ';
// 				}
// 			}
// 		}
// 		console.log(str + '\n' );
// 		str = '';	
// 	}
		
// }

// drawRectangle (n) ;

// function drawRightTriangle(n , m) {
// 	console.log('*' +  '\n');
// 	var str='';
// 	for (var i = 2; i <= n-1; i++) {
// 		str = str + '*';
// 		for (var j = 1; j <= m; j++) {
// 			if (i===j) {
// 				str = str + '*';
// 			} else {
// 				srt = str + ' ';
// 			}
// 		}
// 		console.log(str + '\n' );
// 		str = '';
// 	}
// 	for (var i = 1; i <= m; i++) {
// 		str = str +'*';
// 	}
// 	console.log(str + '\n' );
// }

// drawRightTriangle (6, 6);

function drawRhombus(starsNumbers) {
	var	cellNumbers = starsNumbers *2 -1;
	var str = '';
	var middle = starsNumbers;

	for (var i = 1; i <= starsNumbers; i++) {
		for (var j = 1; j <= middle-i; j++) {
			str = str + ' ';
		}
		for (var j = middle-i+1; j <= middle+i-1; j++) {
			str = str + '*';
		}
		console.log(str + '\n' );
		str = '';
		}
		
		for (var i = 1; i <= cellNumbers - starsNumbers; i++) {
			for (var j = 1; j <= i; j++) {
				str = str + ' ';
			}
			for (var j = i + 1; j <= cellNumbers -i ; j++) {
				str = str + '*';
			}
			console.log(str + '\n' );
			str = '';
		}
	
}

drawRhombus (9);