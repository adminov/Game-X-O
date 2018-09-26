 var tables = document.querySelectorAll('#table-main td');
 var XGamer = 'X';
prepareField(tables);
 
 function prepareField(tables){
 	 for(var i = 0; i < tables.length; i++){
 	tables[i].addEventListener('click', tablesClick);
 }

 }

 function tablesClick(){
 	this.innerHTML = XGamer;

 	if (XGamer == 'X') {
 		XGamer = 'O';
 	} else {
 		XGamer = 'X';
 	}

 	this.removeEventListener('click', tablesClick);
 	var winner = checking(tables);
 	if (winner !== false){
 		alert(winner);
 	}
 }

function TheEnd(tables){
	stopGame(tables)
}

function stopGame(tables){
	for (var i = 0; i < tables.length; i++){
		tables[i].removeEventListener('click', tablesClick);
	}
}

 function checking(tables){
 	var winning = [
 		[0, 1, 2],
 		[3, 4, 5],
 		[6, 7, 8],
 		
 		[0, 3, 6],
		[1, 4, 7],
 		[2, 5, 8],
 		
 		[0, 4, 8],
 		[2, 4, 6],
 	];

 	for(var i = 0; i < winning.length; i++) {
 		var win = winning[i];
 		if (
 		tables[win[0]].innerHTML == tables[win[1]].innerHTML &&
 		tables[win[1]].innerHTML == tables[win[2]].innerHTML &&
 		tables[win[0]].innerHTML != ''
 		) {
 		return tables[win[0]].innerHTML;
 		}
 	}

 	return false;
 }