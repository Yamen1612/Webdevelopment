

const setup = () => {
	const herberekenBtn = document.getElementById("herberekenBtn");
	const totaalCell = document.getElementById("totaal");

	herberekenBtn.addEventListener("click", function() {
		herberekenTabel();
	});

	function herberekenTabel() {

		const rows = document.querySelectorAll("tbody tr");
		let totaal = 0;

		rows.forEach(row => {

			const prijsCell = row.querySelector(".prijs");
			const aantalInput = row.querySelector(".aantal");
			const btwCell = row.querySelector(".btw");
			const subtotaalCell = row.querySelector(".subtotaal");


			const prijsString = prijsCell.textContent.replace("Eur", "").trim();
			const prijs = parseFloat(prijsString);


			const aantal = parseFloat(aantalInput.value);


			const btwString = btwCell.textContent.replace("%", "").trim();
			const btwPercentage = parseFloat(btwString);


			const subtotaal = prijs * aantal * (1 + btwPercentage / 100);


			subtotaalCell.textContent = `${subtotaal.toFixed(2)} Eur`;


			totaal += subtotaal;
		});


		totaalCell.textContent = `${totaal.toFixed(2)} Eur`;
	}}
	window.addEventListener("load", setup);
