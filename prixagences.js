//prix par agence
// Définition de la fonction pour gérer l'état initial des sélecteurs "Agence" et "Commune"
function toggleAgenceandcommune() {
  // Ajoutez ici la logique pour gérer l'état initial des sélecteurs "Agence" et "Commune"
}

 // Appelez la fonction pour gérer l'état initial des sélecteurs "Agence" et "Commune"
  toggleAgenceandcommune();

  // Ajoutez un écouteur d'événements pour le sélecteur "Lieu de Livraison"
const selectLivraison = document.getElementById("livraison");
selectLivraison.addEventListener("change", toggleAgenceandcommune);
  
  
function mettreAJourPrix() {
  const agenceSelect = document.getElementById("agence");
  const communeSelect = document.getElementById("commune");
  const prixInput = document.getElementById("prix");
  const agenceType = agenceSelect.value;
  const communeType = communeSelect.value;
  
  const prixParAgence = {
    "Agence de Adrar": 950,
	"Agence de Chlef": 500,
    "Agence de Ténès": 500,
    "Agence de Laghouat": 600,
    "Agence de Aflou": 600,
    "Agence de Oum el Bouaghi": 500,
    "Agence de Aïn M'lila": 500,
    "Agence de Batna": 500,
    "Agence de Barika": 500,
    "Agence de Béjaïa": 500,
    "Agence de Souk El Ténine": 500,
    "Agence de Akbou": 500,
    "Agence de El Kseur": 500,
    "Agence de Biskra": 600,
    "Agence de Tolga": 600,
    "Agence de Béchar": 950,
    "Agence de Blida": 550,
    "Agence de Boufarik": 550,
    "Agence de Bouira": 500,
    "Agence de Lakhdaria": 500,
    "Agence de Sour El Ghouzlane": 500,
	"Agence de Tamanrasset": 1350,
	"Agence de Tébessa": 600,
	"Agence de Bir el Ater (non livrable)": 34,
	"Agence de Tlemcen": 500,
	"Agence de Hennaya": 500,
	"Agence de Maghnia": 500,
	"Agence de Chetouane": 500,
	"Agence de Mansourah": 500,
	"Agence de Frenda": 500,
	"Agence de Tiaret": 500,
	"Agence de Bekkar": 500,
	"Agence de Nouvelle ville": 500,
	"Agence de Tizi Gheniff": 500,
	"Agence de Azazga": 500,
	"Agence de Draâ Ben Khedda": 500,
	"Agence de Sacré Coeur": 350,
	"Agence de Birkhadem": 350,
	"Agence de Birtouta": 350,
	"Agence de Bordj El Bahri": 350,
	"Agence de Bordj El Kiffan": 350,
	"Agence de Hussein Dey": 350,
	"Agence de Reghaïa DNC": 350,
	"Agence de Reghaïa Signa": 350,
	"Agence de Aïn Benian": 350,
	"Agence de Zeralda": 350,
	"Agence de Cheraga Dar Diaf": 350,
	"Agence de Cheraga Amara": 350,
	"Agence de Draria": 350,
	"Agence de Aïn Oussara": 600,
	"Agence de Djelfa": 600,
	"Agence de Jijel": 500,
	"Agence de Taher": 500,
	"Agence de Aïn Oulmene": 500,
	"Agence de El Eulma": 500,
	"Agence de Sétif El Hidhab": 500,
	"Agence de Sétif Maabouda": 500,
	"Agence de Saïda": 500,
	"Agence de Azzaba": 500,
	"Agence de Collo": 500,
	"Agence de El Harrouch": 500,
	"Agence de Skikda": 500,
	"Agence de Sidi Bel Abbès": 500,
	"Agence de Benhamouda": 500,
	"Agence de Annaba": 500,
	"Agence de El Bouni": 500,
	"Agence de Guelma": 500,
	"Agence de Oued Zenati": 500,
	"Agence de Constantine": 500,
	"Agence de El Khroub": 500,
	"Agence de Ali Mendjeli": 500,
	"Agence de Didouche Mourad": 500,
	"Agence de Médéa Pole Urbain": 500,
	"Agence de Médéa El Koutab": 500,
	"Agence de Mostaganem Kharouba": 500,
	"Agence de Mostaganem Salamandre": 500,
	"Agence de Berhoum": 500,
	"Agence de Bou Saâda": 500,
	"Agence de Salem Shopping Mall": 500,
	"Agence de Mascara": 500,
	"Agence de Hassi Messaoud": 600,
	"Agence de Ouargla": 600,
	"Agence de Oran Cité Djamel": 500,
	"Agence de Oran Saint Hubert": 500,
	"Agence de Bir El Djir": 500,
	"Agence de Arzew": 500,
	"Agence de El Bayadh": 950,
	"Agence de Illizi": 1350,
	"Agence de Cité Soualem": 500,
	"Agence de El Djebassa": 500,
	"Agence de Boumerdes": 550,
	"Agence de Bordj Menaiel": 550,
	"Agence de Ben Mehidi": 500,
	"Agence de El Tarf": 500,
	"Agence de Tindouf": 1350,
	"Agence de Tissemsilt": 500,
	"Agence de El Oued": 600,
	"Agence de Khenchela": 500,
	"Agence de Souk Ahras": 500,
	"Agence de Tipaza": 550,
	"Agence de Chelghoum Laid": 500,
	"Agence de Mila": 500,
	"Agence de Aïn Defla": 500,
	"Agence de Khemis Miliana": 500,
	"Agence de Naâma": 950,
	"Agence de Mecheria": 950,
	"Agence de Aïn Témouchent": 500,
	"Agence de Hammam Bouhadjar": 500,
	"Agence de Ghardaïa": 600,
	"Agence de Bouhraoua": 600,
	"Agence de El Guerrara": 600,
	"Agence de Metlili": 600,
	"Agence de Relizane": 500,
	"Agence de Timimoun": 950,
	"Agence de Ouled Djellal": 600,
	"Agence de In Salah": 1350,
	"Agence de Touggourt": 600,
	"Agence de El M’Ghaier": 600,
	"Agence de Djamaa": 600,
	"Agence de EL Meniaa": 600,
};
  
  const prixParCommune = {
    "Adrar": 1300,
    "Akabli": 1500,
    "Aoulef": 1500,
    "Bouda": 1300,
    "Fenoughil": 1450,
    "In Zghmir": 1500,
    "Ouled Ahmed Tammi": 1300,
    "Reggane": 1500,
    "Sali": 1500,
    "Sebaa": 1300,
    "Tamantit": 1300,
    "Tamekten": 1500,
    "Tamest": 1450,
    "Tit": 1500,
    "Tsabit": 1450,
    "Zaouiet Kounta": 1450,

  };
  
  
  if (agenceType && prixParAgence[agenceType]) {
    prixInput.value = `${prixParAgence[agenceType]} DA`;
  } else if (communeType && prixParCommune[communeType]) {
    prixInput.value = `${prixParCommune[communeType]} DA`;
  } else {
    prixInput.value = "En Cours de Saisie";
  }
}
