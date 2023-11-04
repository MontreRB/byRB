
// script pour coller auto de la commande choisi   
   document.addEventListener("DOMContentLoaded", function() {
    const h2text = sessionStorage.getItem("h2text");
    const h3text = sessionStorage.getItem("h3text");
    
    const commandeTextarea = document.getElementById("commandeTextarea");
    const prixCommandeInput = document.getElementById("prixcommande");
    
    if (commandeTextarea && h2text) {
        commandeTextarea.value = h2text;
    }
    
    if (prixCommandeInput && h3text) {
        prixCommandeInput.value = h3text;
    }
});



