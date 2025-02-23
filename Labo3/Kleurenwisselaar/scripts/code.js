const setup = () => {
	// Selecteer alle knoppen
	const buttons1 = document.querySelectorAll("button.button1");
	const buttons2 = document.querySelectorAll("button.button2");
	const buttons3 = document.querySelectorAll("button.button3");

	// Voeg een click-event toe aan elke knop
	buttons1.forEach(btn => {
		btn.addEventListener("click", function() {
			// Toggle de 'active' class om de kleur te veranderen
			btn.classList.toggle("active");
		});
	});

	buttons2.forEach(btn => {
		btn.addEventListener("click", function() {
			// Toggle de 'active' class om de kleur te veranderen
			btn.classList.toggle("active2");
		});
	});

	buttons3.forEach(btn => {
		btn.addEventListener("click", function() {
			// Toggle de 'active' class om de kleur te veranderen
			btn.classList.toggle("active3");
		});
	});
}
window.addEventListener("load", setup);