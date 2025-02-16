function setup() {
    let button = document.getElementById("wijzigButton");
    button.addEventListener("click", function() {
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = "Welkom!";
    });
}

window.onload = setup;
