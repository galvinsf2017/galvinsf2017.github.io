window.onload = function(){ 
var arr = 
["哈！看我帮您检查您密码的安全<br>投个票看来是可以考虑一下的哦<br>感激不尽！","“成功是优点的发挥，失败是缺点的累积","“不要小看自己，因为人有无限的可能","" ]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("votequote").innerHTML = arr[index]; 

} 