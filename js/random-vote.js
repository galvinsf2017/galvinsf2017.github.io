window.onload = function(){ 
var arr = 
["1","2","3","4","5","6","7","8"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("votequote").innerHTML = arr[index]; 

} 