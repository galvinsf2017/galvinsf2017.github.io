window.onload = function(){ 
var arr = 
["密码，已是每个人熟知的事物<br>可是，您知道吗<br>每天有超过 100,000,000 个密码被破解<br>您的密码，还安全吗？","密码<br>是每个人隐私的一把锁<br>可是，在 21 世纪<br>您能保证您的“锁”不被“撬开”吗？","1","2" ]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("votequote").innerHTML = arr[index]; 

} 