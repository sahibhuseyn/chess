function board(){
	document.write('<div class="wrapper">');
			var size = 8;
			for (var a = 0; a < size; a++) {
				document.write('<div class="row">');
			  for (var b = 0; b < size; b++) {
			    if ((a + b) % 2 == 0){
			     	document.write('<div class="white"></div>');
					}
			    else{
				    document.write('<div class="black"></div>');
					}
			  }
			 	document.write('</div>');
			}
	document.write('</div>');
}
board();