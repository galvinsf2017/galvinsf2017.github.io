window.onload = function(){ 
var arr = ["密码，已是每个人熟知的事物<br>可是，您知道吗<br>每天有超过 1 亿个密码被破解<br>您的密码，还安全吗？","密码<br>是每个人隐私的一把锁<br>可是，在 21 世纪<br>您能保证您的“锁”<br>不被“撬开”吗？","隐私就好比每个人的隐形资产<br>只有高强度的密码才能有效保护您的隐私<br>可是，每天有超过 1 亿个密码被破解<br>您的隐私，还真的是隐私吗？","截止 2015 年 1 月，<br>微信活跃用户已达到 5.5 亿<br>可您的密码，真的能保护您的隐私吗"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("votequote").innerHTML = arr[index]; 

} 