<template>

  <div class="columns is-multiline">
    <Exercice
      v-for="composter in composters"
      :key="composter.datasetid"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      :composter-id="composter.id"
      :composter="composter"
    />
  </div>
</template>

<script>
import Exercice from "./Exercice.vue";
import axios from "axios";
export default {
  name: "ExerciceList",
  components: {
    Exercice,
  },
  data() {
    return {
      nextComposterId: 1,
      composters: new Array(),
    };
  },
  mounted() {
    axios
        .get("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=512042839_composteurs-quartier-nantes-metropole&rows=3")
        .then((response) => {
          this.composters =
          [
          {
            id : 1,
            img : "https://th.bing.com/th/id/OIP.5ZitBiyduIZWFL9GXQNR6gHaG9?pid=ImgDet&rs=1",
            titre : "Les bases du Web",
            description : "",
            date_debut : "Lundi 01 mars 2022",
            date_fin : "",
            etat : "A faire"
          },
          {
            id : 2,
            img : "https://th.bing.com/th/id/OIP.6iV0XJJyibYGf4VpRV3J2gHaEz?pid=ImgDet&rs=1",
            titre : "Choisir un nom de domaine",
            description : "",
            date_debut : "Mercredi 12 mars 2022",
            date_fin : "",
            etat : "En cours"
          },
          {
            id : 3,
            img : "https://th.bing.com/th/id/R.575c113496df85770f3b1469e868115d?rik=mgQ8U3CUGvCx3g&riu=http%3a%2f%2ftechmoka.com%2fwp-content%2fuploads%2f2018%2f03%2fagence-web-2.jpg&ehk=2mNqJVkdVy9zBXcKXPduupMh5aRDZJqze6y0Y6%2b9Fng%3d&risl=&pid=ImgRaw&r=0",
            titre : "Concevoir un projet de Site Web",
            description : "",
            date_debut : "Vendredi 07 mars 2022",
            date_fin : "",
            etat : "A faire"
          },
          {
            id : 4,
            img : "https://th.bing.com/th/id/R.554b98cebf5dcab3f6cddb201bc9ba14?rik=HMp%2bWVgNvP%2fwwg&riu=http%3a%2f%2fhebergement.blog%2fwp-content%2fuploads%2f2017%2f06%2fserveur-informatique.jpg&ehk=cab1LCDdqoSwGsSchw9oMux%2bdPEC3z%2bLD2ZdjSm5YNs%3d&risl=&pid=ImgRaw&r=0",
            titre : "Installation du serveur",
            description : "",
            date_debut : "Jeudi 01 fevrier 2022",
            date_fin : "",
            etat : "Terminé"
          },
          {
            id : 5,
            img : "https://th.bing.com/th/id/OIP.5ZitBiyduIZWFL9GXQNR6gHaG9?pid=ImgDet&rs=1",
            titre : "Accéder à mon site WordPress (et le modifier)",
            description :"" ,
            date_debut : "Lundi 22 avril 2022",
            date_fin : "",
            etat : "A faire"
          },
          {
            id : 6,
            img : "https://th.bing.com/th/id/OIP.5ZitBiyduIZWFL9GXQNR6gHaG9?pid=ImgDet&rs=1",
            titre : "Installer un thème pour modifier le design (couleur, menus…)",
            description : "",
            date_debut : "Lundi 01 mars 2022",
            date_fin :"" ,
            etat : "En cours"
          },
          {
            id : 7,
            img : "https://th.bing.com/th/id/OIP.5ZitBiyduIZWFL9GXQNR6gHaG9?pid=ImgDet&rs=1",
            titre : "Comprendre les extensions",
            description : "",
            date_debut : "Lundi 01 mars 2022",
            date_fin : "",
            etat : "En cours"
          },
          ];
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  },
};
</script>
