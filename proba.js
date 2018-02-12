ffunction drawRhombus(starsNumbers) {
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
		// for (var j = middle+i; j <= cellNumbers; j++) {
		// 	str = str + ' ';
		// }
		console.log(' i=' + i +'   ' + str + '\n' );
		str = '';
		}
		
		for (var i = 1; i <= cellNumbers - starsNumbers; i++) {
				
			for (var j = 1; j <= i; j++) {
				str = str + ' ';
			}
			
			for (var j = i + 1; j <= cellNumbers -i ; j++) {
				str = str + '*';
			}
			// for (var j = (i + middle - counter + 1); i <= cellNumbers; j++) {
			// 	str = str + 'j';
			// }
			
		
		console.log(' i=' + i +'   ' + str + '\n' );
		str = '';
		}
	
}