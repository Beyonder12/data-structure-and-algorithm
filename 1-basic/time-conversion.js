

function timeConversion(s) {

	var period = s.slice(-2);
	var hour = s.slice(0,2);
	var military;

	if ( period == 'PM' && eval(hour) != '12') {
		var conversion = eval(hour) + 12;
		s = s.replace(hour, conversion);
	} else if ( period == 'AM' && eval(hour) == '12') {
		s = s.replace(hour,'00');
	}

	military = s.slice(0,-2);
	return military;
}

console.log(timeConversion('07:05:45PM'))
