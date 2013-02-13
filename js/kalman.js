var Q = 2;
var R = 85;
var F = 1;
var H = 1;
var X0;
var P0;
var State = 0;
var Covariance = 0.1;

function SetState(state_s,covariance_s){
State = state_s;
Covariance = covariance_s;
}
function Correct(data)
{
X0 = F*State;
P0 = F*Covariance*F + Q;

var K = H*P0/(H*P0+R);
State = X0 + K*(data - H*X0);
Covariance = (1 - K*H)*P0;
}

SetState(0,0.1);