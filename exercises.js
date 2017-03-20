var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

var one = function() {
	var	counter;
    
	for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}
}

var two = function() {
	names.forEach(function(name) {
		console.log(name);
	});
}