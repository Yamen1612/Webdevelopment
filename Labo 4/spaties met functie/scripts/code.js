document.addEventListener("DOMContentLoaded", function () {

	const button = document.getElementById("convertButton");
	const inputField = document.getElementById("userInput");

	button.addEventListener("click", function () {
		let inputText = inputField.value.trim();

		if (inputText.length === 0) {
			console.log("Geen tekst ingevoerd!");
			return;
		}

		let spacedText = inputText.split("").join(" ");
		console.log(spacedText);
	});
});
