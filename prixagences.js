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
    "Agence de Adrar": 550,
	"Agence de Chlef": 350,
    "Agence de Ténès": 350,
    "Agence de Laghouat": 350,
    "Agence de Aflou": 350,
    "Agence de Oum el Bouaghi": 350,
    "Agence de Aïn M'lila": 350,
    "Agence de Batna": 350,
    "Agence de Barika": 350,
    "Agence de Béjaïa": 350,
    "Agence de Souk El Ténine": 350,
    "Agence de Akbou": 350,
    "Agence de El Kseur": 350,
    "Agence de Biskra": 350,
    "Agence de Tolga": 350,
    "Agence de Béchar": 550,
    "Agence de Blida": 250,
    "Agence de Boufarik": 250,
    "Agence de Bouira": 350,
    "Agence de Lakhdaria": 350,
    "Agence de Sour El Ghouzlane": 350,
	"Agence de Tamanrasset": 550,
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
	"Agence de Aïn Oussara": 350,
	"Agence de Djelfa": 350,
	"Agence de Jijel": 350,
	"Agence de Taher": 350,
	"Agence de Aïn Oulmene": 350,
	"Agence de El Eulma": 350,
	"Agence de Sétif El Hidhab": 350,
	"Agence de Sétif Maabouda": 350,
	"Agence de Saïda": 350,
	"Agence de Azzaba": 350,
	"Agence de Collo": 350,
	"Agence de El Harrouch": 350,
	"Agence de Skikda": 350,
	"Agence de Sidi Bel Abbès": 350,
	"Agence de Benhamouda": 350,
	"Agence de Annaba": 350,
	"Agence de El Bouni": 350,
	"Agence de Guelma": 350,
	"Agence de Oued Zenati": 350,
	"Agence de Constantine": 350,
	"Agence de El Khroub": 350,
	"Agence de Ali Mendjeli": 350,
	"Agence de Didouche Mourad": 350,
	"Agence de Médéa Pole Urbain": 350,
	"Agence de Médéa El Koutab": 350,
	"Agence de Mostaganem Kharouba": 350,
	"Agence de Mostaganem Salamandre": 350,
	"Agence de Berhoum": 350,
	"Agence de Bou Saâda": 350,
	"Agence de Salem Shopping Mall": 350,
	"Agence de Mascara": 350,
	"Agence de Hassi Messaoud": 350,
	"Agence de Ouargla": 350,
	"Agence de Oran Cité Djamel": 350,
	"Agence de Oran Saint Hubert": 350,
	"Agence de Bir El Djir": 350,
	"Agence de Arzew": 350,
	"Agence de El Bayadh": 550,
	"Agence de Illizi": 550,
	"Agence de Cité Soualem": 350,
	"Agence de El Djebassa": 350,
	"Agence de Boumerdes": 250,
	"Agence de Bordj Menaiel": 250,
	"Agence de Ben Mehidi": 350,
	"Agence de El Tarf": 350,
	"Agence de Tindouf": 550,
	"Agence de Tissemsilt": 350,
	"Agence de El Oued": 350,
	"Agence de Khenchela": 350,
	"Agence de Souk Ahras": 350,
	"Agence de Tipaza": 250,
	"Agence de Chelghoum Laid": 350,
	"Agence de Mila": 350,
	"Agence de Aïn Defla": 350,
	"Agence de Khemis Miliana": 350,
	"Agence de Naâma": 550,
	"Agence de Mecheria": 550,
	"Agence de Aïn Témouchent": 350,
	"Agence de Hammam Bouhadjar": 350,
	"Agence de Ghardaïa": 350,
	"Agence de Bouhraoua": 350,
	"Agence de El Guerrara": 350,
	"Agence de Metlili": 350,
	"Agence de Relizane": 350,
	"Agence de Timimoun": 550,
	"Agence de Ouled Djellal": 350,
	"Agence de In Salah": 550,
	"Agence de Touggourt": 350,
	"Agence de El M’Ghaier": 350,
	"Agence de Djamaa": 350,
	"Agence de EL Meniaa": 350,
};
  
  const prixParCommune = {
    "Adrar": 750,
    "Akabli": 750,
    "Aoulef": 750,
    "Bouda": 750,
    "Fenoughil": 750,
    "In Zghmir": 750,
    "Ouled Ahmed Tammi": 750,
    "Reggane": 750,
    "Sali": 750,
    "Sebaa": 750,
    "Tamantit": 750,
    "Tamekten": 750,
    "Tamest": 750,
    "Tit": 750,
    "Tsabit": 750,
    "Zaouiet Kounta": 750,

  };
  
  
  if (agenceType && prixParAgence[agenceType]) {
    prixInput.value = `${prixParAgence[agenceType]} DA`;
  } else if (communeType && prixParCommune[communeType]) {
    prixInput.value = `${prixParCommune[communeType]} DA`;
  } else {
    prixInput.value = "En Cours de Saisie";
  }
}
