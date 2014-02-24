$(function(){
	
	var note = $('#note'),
		ts = new Date(2014, 4, 1),
		up = new Date(2014, 9, 9),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " 天" + ", ";
			message += hours + " 小时" + ", ";
			message += minutes + " 分" + ", ";
			message += seconds + " 秒" + " <br />";
			
			if(newYear){
				message += "距离五一";
			}
			else {
				message += "距离五一";
			}
			
			note.html(message);
		}
	});
	
});
