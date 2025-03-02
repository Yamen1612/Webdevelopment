let leeftijd = 34;
let intrest = 0.12;
let isGevaarlijk = true;
let vandaag = new Date();

const print = (message) => {
	console.log(message);
};

print(`leeftijd (${leeftijd}) is van type: ${typeof leeftijd}`);
print(`intrest (${intrest}) is van type: ${typeof intrest}`);
print(`isGevaarlijk (${isGevaarlijk}) is van type: ${typeof isGevaarlijk}`);
print(`vandaag (${vandaag}) is van type: ${typeof vandaag}`);

document.getElementById("leeftijd").textContent = `${leeftijd} (Type: ${typeof leeftijd})`;
document.getElementById("intrest").textContent = `${intrest} (Type: ${typeof intrest})`;
document.getElementById("isGevaarlijk").textContent = `${isGevaarlijk} (Type: ${typeof isGevaarlijk})`;
document.getElementById("vandaag").textContent = `${vandaag} (Type: ${typeof vandaag})`;
