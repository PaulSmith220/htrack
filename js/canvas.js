
var angles = [0];
var canvas = document.getElementById("canvas");
var rc=document.getElementById("canvas").getContext('2d');
			
			rc.moveTo(10,10);
			rc.lineTo(100,80);
			rc.stroke();
rc.clearRect(0, 0, canvas.width, canvas.height);
setInterval(function(){redraw(angles);},20);		
function redraw(angles){
rc.clearRect(0, 0, canvas.width, canvas.height);
rc.beginPath();
	for (var i=0;i<=angles.length-1;i++){
		
		rc.lineTo(angles[i]+150,i+0);
		rc.moveTo(angles[i]+150,i+0);

	
	}
	rc.arc(angles[angles.length-1]+153, 200, 6, 0 , 2 * Math.PI, false);
	rc.stroke();
	rc.moveTo(angles[angles.length-1]+150,200);
	rc.fillStyle = 'green';
      rc.fill();
		
}

