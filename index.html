
<!doctype html>
<html lang="en">
	<head>
		<title>Детекцийа</title>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
		<meta charset="utf-8">
		<style>
			body {
				background-color: #f0f0f0;
				margin-left: 10%;
				margin-right: 10%;
				margin-top: 5%;
				width: 40%;
				overflow: hidden;
				font-family: "Helvetica", Arial, Serif;
				position: relative;
			}
			#slider_wrap{
				display:block;
				width:300px;
				height:50px;
				border:1px solid black;
				background:#fff;
			}
			#slider{
				display:block;
				width:10px;
				height:48px;
				border:1px solid black;
				background:#f00;
				position:relative;
				left:-10%;
				margin-left:50%;
			}
	
		</style>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/kalman.js"></script>
		<script type="text/javascript" src="js/angle.js"></script>
		<script type="text/javascript" src="js/mid.js"></script>
				
	</head>
	<body>
	<canvas id='canvas'  widht="400" height="300" style='background:#fff;display:block;position:absolute;left:80%;width:400px;height:300px;border:1px solid grey;' ></canvas>
		<script src="js/headtrackr.js"></script>
		
		<canvas id="compare" width="320" height="240" style="display:none;"></canvas>
		<video id="vid" autoplay loop width="320" height="240"></video>
		<canvas id="overlay" width="320" height="240"></canvas>
		<canvas id="debug" width="320" height="240"></canvas>
		
		<p id='gUMMessage'></p>
		<p>Что происходит : <span id='headtrackerMessage'></span></p>
		<br>
		Угол: <span id='ang'></span> 
		<p><input type="button" onclick="htracker.stop();htracker.start();" value="Перезапуск"></input>
		<br/><br/>
		<input type="checkbox" onclick="showProbabilityCanvas()" value=""></input>Матрица вероятностей</p>
		<button id='stop_ang'>Стоп</button>
		<div id='tab_p' style='height:100px; overflow:scroll;'>
		<table id='angles' border=1 cellspacing=0>
		
		</table>
		</div>
		<div id='slider_wrap'>
			<div id='slider'></div>
		</div>
		<script type="text/javascript" src="js/canvas.js"></script>
		<script>
		
		  // set up video and canvas elements needed
		
			var videoInput = document.getElementById('vid');
			var canvasInput = document.getElementById('compare');
			var canvasOverlay = document.getElementById('overlay')
			var debugOverlay = document.getElementById('debug');
			var overlayContext = canvasOverlay.getContext('2d');
			canvasOverlay.style.position = "absolute";
			canvasOverlay.style.top = '0px';
			canvasOverlay.style.zIndex = '100001';
			canvasOverlay.style.display = 'block';
			debugOverlay.style.position = "absolute";
			debugOverlay.style.top = '0px';
			debugOverlay.style.zIndex = '100002';
			debugOverlay.style.display = 'none';
			
			// add some custom messaging
			
			statusMessages = {
				"whitebalance" : "Проверка камеры или баланса белого",
				"detecting" : "Обнаружено лицо",
				"hints" : "Что-то не так, обнаружение затянулось",
				"redetecting" : "Лицо потеряно, поиск..",
				"lost" : "Лицо потеряно",
				"found" : "Слежение за лицом"
			};
			
			supportMessages = {
				"no getUserMedia" : "Браузер не поддерживает getUserMedia",
				"no camera" : "Не обнаружена камера."
			};
			
			document.addEventListener("headtrackrStatus", function(event) {
				if (event.status in supportMessages) {
					var messagep = document.getElementById('gUMMessage');
					messagep.innerHTML = supportMessages[event.status];
				} else if (event.status in statusMessages) {
					var messagep = document.getElementById('headtrackerMessage');
					messagep.innerHTML = statusMessages[event.status];
				}
			}, true);
			
			// the face tracking setup
			
			var htracker = new headtrackr.Tracker({altVideo : {ogv : "", mp4 : ""}, calcAngles : true, ui : false, headPosition : false, debug : debugOverlay});
			htracker.init(videoInput, canvasInput);
			htracker.start();
			
			// for each facetracking event received draw rectangle around tracked face on canvas
			
			document.addEventListener("facetrackingEvent", function( event ) {
				// clear canvas
				overlayContext.clearRect(0,0,320,240);
				// once we have stable tracking, draw rectangle
				if (event.detection == "CS") {
					overlayContext.translate(event.x, event.y)
					overlayContext.rotate(event.angle-(Math.PI/2));
					overlayContext.strokeStyle = "#CC0000";
					overlayContext.strokeRect((-(event.width/2)) >> 0, (-(event.height/2)) >> 0, event.width, event.height);
					overlayContext.rotate((Math.PI/2)-event.angle);
					overlayContext.translate(-event.x, -event.y);
					 document.getElementById('ang').innerHTML=Number(event.angle *(180/ Math.PI)-90);
					
					 
				}
			});
			
			// turn off or on the canvas showing probability
			function showProbabilityCanvas() {
				var debugCanvas = document.getElementById('debug');
				if (debugCanvas.style.display == 'none') {
					debugCanvas.style.display = 'block';
				} else {
					debugCanvas.style.display = 'none';
				}
			}
		</script>
	</body>
</html>
