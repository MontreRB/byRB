const wilayaSelect = document.getElementById("wilaya");
const agenceSelect = document.getElementById("agence");
	

            // Liste des agences par wilaya
            const agences = {
"01- Adrar": ["Choisir Agence", "Agence de Adrar"],
"02- Chlef": ["Choisir Agence", "Agence de Chlef", "Agence de Ténès"],
"03- Laghouat": ["Choisir Agence", "Agence de Laghouat", "Agence de Aflou"],
"04- Oum El Bouaghi": ["Choisir Agence", "Agence de Oum el Bouaghi", "Agence de Aïn M'lila"],
"05- Batna": ["Choisir Agence", "Agence de Batna", "Agence de Barika"],
"06- Béjaïa": ["Choisir Agence", "Agence de Béjaïa", "Agence de Souk El Ténine", "Agence de Akbou","Agence de El Kseur"],
"07- Biskra": ["Choisir Agence", "Agence de Biskra", "Agence de Tolga"],
"08- Béchar": ["Choisir Agence", "Agence de Béchar"],
"09- Blida": ["Choisir Agence", "Agence de Blida", "Agence de Boufarik"],
"10- Bouira": ["Choisir Agence", "Agence de Bouira", "Agence de Lakhdaria", "Agence de Sour El Ghouzlane"],
"11- Tamanrasset": ["Choisir Agence", "Agence de Tamanrasset"],
"12- Tébessa": ["Choisir Agence", "Agence de Tébessa", "Agence de Bir el Ater"],
"13- Tlemcen": ["Choisir Agence", "Agence de Tlemcen", "Agence de Chetouane", "Agence de Hennaya", "Agence de Maghnia", "Agence de Mansourah"],
"14- Tiaret": ["Choisir Agence", "Agence de Frenda", "Agence de Tiaret"],
"15- Tizi Ouzou": ["Choisir Agence", "Agence de Nouvelle ville", "Agence de Bekkar", "Agence de Tizi Gheniff", "Agence de Azazga", "Agence de Draâ Ben Khedda"],
"16- Alger": ["Choisir Agence", "Agence de Sacré Coeur", "Agence de Birkhadem", "Agence de Birtouta", "Agence de Bordj El Bahri", "Agence de Bordj El Kiffan", "Agence de Reghaïa DNC", "Agence de Reghaïa Signa", "Agence de Aïn Benian", "Agence de Zeralda", "Agence de Cheraga Dar Diaf", "Agence de Cheraga Amara", "Agence de Draria", "Agence de Hussein Dey"],
"17- Djelfa": ["Choisir Agence", "Agence de Aïn Oussara", "Agence de Djelfa"],
"18- Jijel": ["Choisir Agence", "Agence de Jijel", "Agence de Taher"],
"19- Sétif": ["Choisir Agence", "Agence de Aïn Oulmene", "Agence de El Eulma", "Agence de Sétif El Hidhab", "Agence de Sétif Maabouda"],
"20- Saïda": ["Choisir Agence", "Agence de Saïda"],
"21- Skikda": ["Choisir Agence", "Agence de Azzaba", "Agence de Collo", "Agence de El Harrouch", "Agence de Skikda"],
"22- Sidi Bel Abbès": ["Choisir Agence", "Agence de Sidi Bel Abbès", "Agence de Benhamouda"],
"23- Annaba": ["Choisir Agence", "Agence de Annaba", "Agence de El Bouni"],
"24- Guelma": ["Choisir Agence", "Agence de Guelma", "Agence de Oued Zenati"],
"25- Constantine": ["Choisir Agence", "Agence de Constantine", "Agence de El Khroub", "Agence de Ali Mendjeli", "Agence de Didouche Mourad"],
"26- Médéa": ["Choisir Agence", "Agence de Médéa Pole Urbain", "Agence de Médéa El Koutab"],
"27- Mostaganem": ["Choisir Agence", "Agence de Mostaganem Kharouba", "Agence de Mostaganem Salamandre"],
"28- M'Sila": ["Choisir Agence", "Agence de Berhoum", "Agence de Bou Saâda", "Agence de Salem Shopping Mall"],
"29- Mascara": ["Choisir Agence", "Agence de Mascara"],
"30- Ouargla": ["Choisir Agence", "Agence de Hassi Messaoud", "Agence de Ouargla"],
"31- Oran": ["Choisir Agence", "Agence de Oran Saint Hubert", "Agence de Oran Cité Djamel", "Agence de Bir El Djir", "Agence de Arzew"],
"32- El Bayadh": ["Choisir Agence", "Agence de El Bayadh"],
"33- Illizi": ["Choisir Agence", "Agence de Illizi"],
"34- Bordj Bou Arreridj": ["Choisir Agence", "Agence de Cité Soualem", "Agence de El Djebassa"],	
"35- Boumerdès": ["Choisir Agence", "Agence de Boumerdes", "Agence de Bordj Menaiel"],
"36- El Tarf": ["Choisir Agence", "Agence de Ben Mehidi", "Agence de El Tarf"],
"37- Tindouf": ["Choisir Agence", "Agence de Tindouf"],
"38- Tissemsilt": ["Choisir Agence", "Agence de Tissemsilt"],
"39- El Oued": ["Choisir Agence", "Agence de El Oued"],
"40- Khenchela": ["Choisir Agence", "Agence de Khenchela"],
"41- Souk Ahras": ["Choisir Agence", "Agence de Souk Ahras"],
"42- Tipaza": ["Choisir Agence", "Agence de Tipaza"],
"43- Mila": ["Choisir Agence", "Agence de Chelghoum Laid", "Agence de Mila"],
"44- Aïn Defla": ["Choisir Agence", "Agence de Aïn Defla", "Agence de Khemis Miliana"],
"45- Naâma": ["Choisir Agence", "Agence de Naâma", "Agence de Mecheria"],
"46- Aïn Témouchent": ["Choisir Agence", "Agence de Aïn Témouchent", "Agence de Hammam Bouhadjar"],
"47- Ghardaïa": ["Choisir Agence", "Agence de Ghardaïa", "Agence de Bouhraoua", "Agence de El Guerrara", "Agence de Metlili"],
"48- Relizane": ["Choisir Agence", "Agence de Relizane"],
"49- Timimoun": ["Choisir Agence", "Agence de Timimoun"],
"50- Bordj Badji Mokhtar": ["Choisir Agence", "Pas d'agence"],
"51- Ouled Djellal": ["Choisir Agence", "Agence de Ouled Djellal"],
"52- Béni Abbès": ["Choisir Agence", "Pas d'agence"],
"53- In Salah": ["Choisir Agence", "Agence de In Salah"],
"54- In Guezzam": ["Choisir Agence", "Pas d'agence"],
"55- Touggourt": ["Choisir Agence", "Agence de Touggourt"],
"56- Djanet": ["Choisir Agence", "Pas d'agence"],
"57- El M’Ghaier": ["Choisir Agence", "Agence de El M’Ghaier", "Agence de Djamaa"],
"58- EL Meniaa": ["Choisir Agence", "Agence de EL Meniaa"],

};

            // Fonction pour mettre à jour les options de la sélection d'agence en fonction de la wilaya sélectionnée
function mettreAJourAgences() {
    const selectedWilaya = wilayaSelect.value;
    agenceSelect.innerHTML = ''; // Effacez les options précédentes

    if (agences[selectedWilaya]) {
        agences[selectedWilaya].forEach(function(agence) {
            const option = document.createElement("option");
            option.text = agence;
            option.value = agence;
            agenceSelect.appendChild(option);
        });
    }
}

// Appelez la fonction mettreAJourAgences() lorsque la page se charge pour afficher les agences initiales
mettreAJourAgences();

// Ajoutez un gestionnaire d'événements sur le changement de la sélection de wilaya
wilayaSelect.addEventListener("change", mettreAJourAgences);


 function handleLieuLivraison() {
    const selectLivraison = document.getElementById("livraison");
    const selectAgence = document.getElementById("agence");
	const selectCommune = document.getElementById("commune");
	const textareaAdresse = document.getElementById("adresse");
	const selectPrix = document.getElementById("prix");

    if (selectLivraison.value === "domicile") {
        // Si "A Domicile" est sélectionné, désactivez le sélecteur d'agence
        selectAgence.disabled = true;
		selectCommune.disabled = false;
		textareaAdresse.disabled = false;
    } else {
        // Sinon, activez le sélecteur d'agence
        selectAgence.disabled = false;
		selectCommune.disabled = true;
		textareaAdresse.disabled = true;
    }
  }




