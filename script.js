$(document).ready(function() {

	$('#password').keyup(function(){
		$('#result').html(checkStrength($('#password').val()))
	})	
	
	function checkStrength(password){
    
	//initial strength
    var strength = 0
	
    //if the password length is less than 6, return message.
    if (password.length < 6) { 
		$('#result').removeClass()
		$('#result').addClass('short')
		return '密码太短了！' 
	}
    
    //length is ok, lets continue.
	
	//if length is 8 characters or more, increase strength value
	if (password.length > 7) strength += 1
	
	//if password contains both lower and uppercase characters, increase strength value
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
	
	//if it has numbers and characters, increase strength value
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
	
	//if it has one special character, increase strength value
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
	
	//if it has two special characters, increase strength value
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	
	//now we have calculated strength value, we can return messages
	
	//if value is less than 2
	if (strength == 0 ) {
		$('#result').removeClass()
		$('#result').addClass('weak')
		return '密码'	
    } else if (strength == 1 ) {
		$('#result').removeClass()
		$('#result').addClass('good')
		return 'Good'	
	} else if (strength == 2 ) {
		$('#result').removeClass()
		$('#result').addClass('good')
		return 'Good'	
    } else if (strength == 3 ) {
		$('#result').removeClass()
		$('#result').addClass('good2')
		return 'Good2'
	} else {
		$('#result').removeClass()
		$('#result').addClass('strong')
		return 'Strong'
	}
}
});