var states = [];
var cnt_mid = 0;
function cor_mid(data){
	
	if (cnt_mid>20){
		states.shift();
		states[states.length-1] = data;
	} else {
		cnt_mid ++;
	}
	var mid = 0;
	for (var i =0;i<=states.length-1;i++){
		mid += states[i];
	}
	return mid/states.length;
}