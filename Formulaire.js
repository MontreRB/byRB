
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


// Commentaires : Script des prix.
  const livraisonSelect = document.getElementById("livraison");
  const wilayaSelect = document.getElementById("wilaya");
  const prixInput = document.getElementById("prix");

  // Écouteur d'événements pour détecter le changement dans la première liste
  livraisonSelect.addEventListener("change", () => {
    const livraisonType = livraisonSelect.value;
    const wilayaSelectionne = wilayaSelect.value;
   

    // Définir les prix pour chaque wilaya lorsque "au stop agence" est choisi
    const prixParwilayaagence = {
     "01- Adrar": 1000,
"02- Chlef": 400,
"03- Laghouat": 600,
"04- Oum El Bouaghi": 400,
"05- Batna": 400,
"06- Béjaïa": 400,
"07- Biskra": 600,
"08- Béchar": 750,
"09- Blida": 300,
"10- Bouira": 400,
"11- Tamanrasset": 0,
"12- Tébessa": 600,
"13- Tlemcen": 400,
"14- Tiaret": 400,
"15- Tizi Ouzou": 400,
"16- Alger": 300,
"17- Djelfa": 600,
"18- Jijel": 400,
"19- Sétif": 400,
"20- Saïda": 600,
"21- Skikda": 400,
"22- Sidi Bel Abbès": 400,
"23- Annaba": 400,
"24- Guelma": 400,
"25- Constantine": 400,
"26- Médéa": 400,
"27- Mostaganem": 400,
"28- M'Sila": 400,
"29- Mascara": 600,
"30- Ouargla": 600,
"31- Oran": 400,
"32- El Bayadh": 750,
"33- Illizi": 0,
"34- Bordj Bou Arreridj": 400,
"35- Boumerdès": 400,
"36- El Tarf": "NC",
"37- Tindouf": 0,
"38- Tissemsilt": 0,
"39- El Oued": 600,
"40- Khenchela": 0,
"41- Souk Ahras": 600,
"42- Tipaza": 400,
"43- Mila": 400,
"44- Aïn Defla": 400,
"45- Naâma": 0,
"46- Aïn Témouchent": 600,
"47- Ghardaïa": 600,
"48- Relizane": 400,
"49- Timimoun": 0,
"50- Bordj Badji Mokhtar": 0,
"51- Ouled Djellal": 0,
"52- WBéni Abbès": 0,
"53- In Salah": 0,
"54- In Guezzam": 0,
"55- Touggourt": 0,
"56- Djanet": 0,
"57- El M’Ghaier": 0,
"58- Meniaa": 0,
      // Ajoutez les autres wilayas avec leurs prix ici
    };

    // Définir les prix pour chaque wilaya lorsque "a domicile" est choisi
    const prixParwilayaDomicile = {
"01- Adrar": 1600,
"02- Chlef": 900,
"03- Laghouat": 1100,
"04- Oum El Bouaghi": 900,
"05- Batna": 900,
"06- Béjaïa": 850,
"07- Biskra": 1100,
"08- Béchar": 1400,
"09- Blida": 700,
"10- Bouira": 850,
"11- Tamanrasset": 0,
"12- Tébessa": 1000,
"13- Tlemcen": 900,
"14- Tiaret": 900,
"15- Tizi Ouzou": 850,
"16- Alger": 500,
"17- Djelfa": 1000,
"18- Jijel": 900,
"19- Sétif": 850,
"20- Saïda": 950,
"21- Skikda": 900,
"22- Sidi Bel Abbès": 900,
"23- Annaba": 850,
"24- Guelma": 900,
"25- Constantine": 850,
"26- Médéa": 850,
"27- Mostaganem": 900,
"28- M'Sila": 900,
"29- Mascara": 950,
"30- Ouargla": 1200,
"31- Oran": 850,
"32- El Bayadh": 1400,
"33- Illizi": 0,
"34- Bordj Bou Arreridj": 900,
"35- Boumerdès": 800,
"36- El Tarf": 950,
"37- Tindouf": 0,
"38- Tissemsilt": 950,
"39- El Oued": 1200,
"40- Khenchela": 950,
"41- Souk Ahras": 950,
"42- Tipaza": 750,
"43- Mila": 900,
"44- Aïn Defla": 900,
"45- Naâma": 1400,
"46- Aïn Témouchent": 950,
"47- Ghardaïa": 1200,
"48- Relizane": 900,
"49- Timimoun": 0,
"50- Bordj Badji Mokhtar": 0,
"51- Ouled Djellal": 0,
"52- WBéni Abbès": 0,
"53- In Salah": 0,
"54- In Guezzam": 0,
"55- Touggourt": 0,
"56- Djanet": 0,
"57- El M’Ghaier": 0,
"58- Meniaa": 0,
      // Ajoutez les autres wilayas avec leurs prix ici
    };

    // Mettre à jour la valeur du champ d'entrée du prix en fonction du choix

     if (livraisonType === "agence") {
  const prixagence = prixParwilayaagence[wilayaSelectionne];
  prixInput.value = prixagence !== undefined ? prixagence + " DA" : "Non desservie";
} else {
  const prixdomicile = prixParwilayaDomicile[wilayaSelectionne];
  prixInput.value = prixdomicile !== undefined ? prixdomicile + " DA" : "Non desservie";
}
  });
 // Écouteur d'événements pour détecter le changement dans la deuxième liste (wilaya)
  wilayaSelect.addEventListener("change", () => {
    // Réinitialiser le champ de saisie du prix en le vidant
    prixInput.value = "";
    
  });
  // Écouteur d'événements pour détecter le changement dans la deuxième liste (wilaya)
  wilayaSelect.addEventListener("change", () => {
    // Réinitialiser le champ de saisie de la livraison en le vidant
    livraisonInput.value = "";
    
  });
;
