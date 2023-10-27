<?php
  $file = "compteur.txt"; // Nom du fichier de stockage des visites

  if (file_exists($file)) {
    $count = (int)file_get_contents($file); // Lire le compteur actuel
    $count++; // Incrémenter le compteur
  } else {
    $count = 1; // Si le fichier n'existe pas, initialiser le compteur à 1
  }

  file_put_contents($file, $count); // Enregistrez la nouvelle valeur du compteur
  echo "Visites : " . $count; // Affichez le compteur sur la page
?>
