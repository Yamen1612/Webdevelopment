document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("first-name").focus();

	const birthYearInput = document.getElementById("birth-year");
	birthYearInput.addEventListener("input", function () {
		if (this.value < 1900 || this.value > new Date().getFullYear()) {
			alert("Voer een geldig geboortejaar in tussen 1900 en " + new Date().getFullYear());
			this.value = "";
		}
	});

	const favNumberInput = document.getElementById("fav-number");
	favNumberInput.addEventListener("input", function () {
		if (this.value < 1 || this.value > 100) {
			alert("Voer een geldig nummer in tussen 1 en 100.");
			this.value = "";
		}
	});
});
