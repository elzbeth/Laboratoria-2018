document.getElementById('html');

var scores = {};
var players = [['may','0'], ['inde','0'], ['kartea','0'],['lau','0'],['monz','0'],['elz','0']]
	


function scorekeeper(players){
	for (var i = 0; i < players.length; i++) {
		scores [players[i][0]] = parseInt(players[i][1]);

			if(Object.keys(scores) === [players[i][0]]){
			
				return Object.keys(scores)
			}else{
				continue
			}
		
	}

	console.log (scores);
	return scores

}


function updating(theNewArray){
	for (var i = 0; i < theNewArray.length; i++) {
		newPoints = parseInt(theNewArray[i][1])
		scores [theNewArray[i][0]] += newPoints ;
		
	}

	return scores

}

function totalScore(){

	console.log(scores)
}
		

		
	





scorekeeper(players);
scorekeeper([['inde','3000']])
updating([['inde','500']])
updating([['monz','765'], ['may','600']])
totalScore()