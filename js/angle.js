function addangle(){
 tab = $("#angles");
 angle = $("#ang").html();


 if (angle!=''){

	if (first==1){
		first = 0;
		State = angle;
		
		}
		 Correct(angle);
angle = State;
 //tab.append(angle+"<br>");
 //$("#tab_p").scrollTop = 9999;
 slider_pos = ((300*angle)/180).toFixed(2);
 $("#slider").css("left",slider_pos+"%");
 
 angles[angles.length] = (angle*1.5);
 if (angles.length > 200){
		angles.shift();
	}
 
 }
}
var first = 1;
$(document).ready(function(){

m =	setInterval(function(){ addangle(); },1);

$("#stop_ang").click(function(){
clearInterval(m);
});

});