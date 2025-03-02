document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("countButton");
	const resultParagraph = document.getElementById("result");

	button.addEventListener("click", function () {
		let text = "De man van An geeft geen hand aan ambetante verwanten";
		let sequence = "an";

		// Met indexOf
		function countOccurrencesIndexOf(str, search) {
			let count = 0;
			let pos = str.indexOf(search);
			while (pos !== -1) {
				count++;
				pos = str.indexOf(search, pos + 1);
			}
			return count;
		}

		//  Met lastIndexOf
		function countOccurrencesLastIndexOf(str, search) {
			let count = 0;
			let pos = str.lastIndexOf(search);
			while (pos !== -1) {
				count++;
				str = str.substring(0, pos);
				pos = str.lastIndexOf(search);
			}
			return count;
		}

		let countUsingIndexOf = countOccurrencesIndexOf(text, sequence);
		let countUsingLastIndexOf = countOccurrencesLastIndexOf(text, sequence);

		console.log(`Aantal keer "an" met indexOf: ${countUsingIndexOf}`);
		console.log(`Aantal keer "an" met lastIndexOf: ${countUsingLastIndexOf}`);

		resultParagraph.innerHTML = `Met indexOf: ${countUsingIndexOf} keer<br>Met lastIndexOf: ${countUsingLastIndexOf} keer`;
	});
});
