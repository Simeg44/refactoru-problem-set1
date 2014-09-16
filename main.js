function letterCapitalize(sentance) {
	var array = sentance.split(" ");

	for (i=0; i<array.length; i++) {
		var word = array[i];
		array[i] = word[0].toUpperCase() + word.substring(1);
	}

	return array.join(" ");
};

var wordCount = function(sentance) {
	var array = sentance.split(" ");

	return array.length;
};

var primeTime = function(prime) {
	if (prime < 2) {
		return false;
	}
	else {
		for(i=2; i < (prime/2); i++) {
			if (prime % i === 0) {
				return false;
			}
		}
	return true;	
	}
}

// var capital = prompt("Enter a string:");
// var wordNum = prompt("Enter a string:");
var prime = prompt("Enter a number:");

// console.log(letterCapitalize(capital));
// console.log(wordCount(wordNum));
console.log(primeTime(prime));