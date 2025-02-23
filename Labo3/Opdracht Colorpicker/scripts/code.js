window.addEventListener("load", function() {
	// Haal de sliders op
	const redSlider = document.getElementById("redSlider");
	const greenSlider = document.getElementById("greenSlider");
	const blueSlider = document.getElementById("blueSlider");

	// Haal de labels naast de sliders op
	const redLabel = document.getElementById("redLabel");
	const greenLabel = document.getElementById("greenLabel");
	const blueLabel = document.getElementById("blueLabel");

	// Haal het kleurvak op
	const colorBox = document.getElementById("colorBox");

	// Functie om de kleur en labels te updaten
	function updateColor() {
		const r = redSlider.value;
		const g = greenSlider.value;
		const b = blueSlider.value;

		// Update tekstlabels, bijvoorbeeld: "Red 128"
		redLabel.textContent = `Red ${r}`;
		greenLabel.textContent = `Green ${g}`;
		blueLabel.textContent = `Blue ${b}`;

		// Update de achtergrondkleur van het vak
		colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}

	// Koppel de update-functie aan de 'input' events van de sliders
	redSlider.addEventListener("input", updateColor);
	greenSlider.addEventListener("input", updateColor);
	blueSlider.addEventListener("input", updateColor);

	// Initialiseer de juiste startkleur en labels
	updateColor();
});
