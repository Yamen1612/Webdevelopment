
let familieleden = ["Jan", "Emma", "Pieter", "Sophie", "Lucas"];

console.log("Aantal elementen in de array:", familieleden.length);

console.log("Eerste element:", familieleden[0]);
console.log("Derde element:", familieleden[2]);
console.log("Vijfde element:", familieleden[4]);

function voegNaamToe(array) {
    let nieuweNaam = prompt("Voer een nieuwe naam in:");
    if (nieuweNaam) {
        array.push(nieuweNaam);
        console.log("Nieuwe lijst met familieleden:", array);
    } else {
        console.log("Geen naam ingevoerd.");
    }
}

console.log("Array als string:", familieleden.join(", "));
