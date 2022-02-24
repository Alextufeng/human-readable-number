module.exports = function toReadable(number) {

	number = String(number);
	let zeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let twentyNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let hundred = 'hundred';

	for (i = 0; i < number.length; i++) {

		if (number.length === 1) {
			j = number;
			return zeroNine[j];
		}

		else if (number.length === 2) {
			j = number[0];
			e = number[1];

			if (j === '1') {
				return tenNineteen[e];
			}

			else if (e === '0') { 
				return twentyNinety[j];
			}

			else { 
				return twentyNinety[j] + " " + zeroNine[e];
			}
		}

		else if (number.length === 3) {
			j = Math.floor(number / 100);
			e = number[1];
			f = number[2];

			if (e === '0' && f === '0') { 
				return zeroNine[j] + " " + hundred;
			}
			
			else if (e === '0') {
				return zeroNine[j] + " " + hundred + " " + zeroNine[f];
			}

			else if (e === '1') {
				return zeroNine[j] + " " + hundred + " " + tenNineteen[f];
			}

			else if (f === '0') {
				return zeroNine[j] + " " + hundred + " " + twentyNinety[e];
			}

			else { 
				return zeroNine[j] + " " + hundred + " " + twentyNinety[e] + " " + zeroNine[f];
			}
		}
	}
}
