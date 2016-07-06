hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

$(document).ready(function () {
    $('#password_field').keydown(function(event) {
        if (event.keyCode == 13) {
	    if (hashCode($('#password_field').val().toLowerCase())== 104080927) {
		$('#hidden_area').show('slow');
		$('#password_area').hide('fast');
	    } else {
		$('#password_label').text("Try again: ");
	    }
	}
    });
});
