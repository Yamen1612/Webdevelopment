
function toonPopups() {
    let resultatenDiv = document.getElementById("resultaten");
    resultatenDiv.innerHTML = "";

    alert("Dit is een alert popup!");
    resultatenDiv.innerHTML += "<p>Alert popup is getoond.</p>";

    let confirmResult = confirm("Wil je doorgaan?");
    console.log("Return value van confirm:", confirmResult);
    resultatenDiv.innerHTML += `<p>Return value van confirm: ${confirmResult}</p>`;

    let promptResult = prompt("Voer een tekst in:");
    console.log("Return value van prompt:", promptResult);
    resultatenDiv.innerHTML += `<p>Return value van prompt: ${promptResult}</p>`;
}
