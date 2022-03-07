<template>

  <div class="columns is-multiline">
    <Module
      v-for="composter in composters"
      :key="composter.datasetid"
      class="column is-half-tablet is-half-desktop is-half-widescreen"
      :composter-id="composter.id"
      :composter="composter"
    />
  </div>
</template>

<script>
import Module from "./Module.vue";
import axios from "axios";
export default {
  name: "ModuleList",
  components: {
    Module,
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
            titre : "Developpement PHP",
            pourcentage : "20%",
            exo_fait : "5",
            exo_total : "20",
            etat : "A faire"
          },
          {
            id : 2,
            img : "https://th.bing.com/th/id/OIP.6iV0XJJyibYGf4VpRV3J2gHaEz?pid=ImgDet&rs=1",
            titre : "Initiation WordPress",
            pourcentage : "80%",
            exo_fait : "8",
            exo_total : "10",
            etat : "A faire"
          },
          {
            id : 3,
            img : "https://th.bing.com/th/id/R.575c113496df85770f3b1469e868115d?rik=mgQ8U3CUGvCx3g&riu=http%3a%2f%2ftechmoka.com%2fwp-content%2fuploads%2f2018%2f03%2fagence-web-2.jpg&ehk=2mNqJVkdVy9zBXcKXPduupMh5aRDZJqze6y0Y6%2b9Fng%3d&risl=&pid=ImgRaw&r=0",
            titre : "Concevoir un Site Web HTML",
            pourcentage : "100%",
            exo_fait : "12",
            exo_total : "12",
            etat : "Terminer"
          },
          {
            id : 4,
            img : "https://th.bing.com/th/id/R.554b98cebf5dcab3f6cddb201bc9ba14?rik=HMp%2bWVgNvP%2fwwg&riu=http%3a%2f%2fhebergement.blog%2fwp-content%2fuploads%2f2017%2f06%2fserveur-informatique.jpg&ehk=cab1LCDdqoSwGsSchw9oMux%2bdPEC3z%2bLD2ZdjSm5YNs%3d&risl=&pid=ImgRaw&r=0",
            titre : "Serveur Tomcat",
            pourcentage : "0%",
            exo_fait : "0",
            exo_total : "20",
            etat : "A faire"
          },
            {
              id : 5,
              img : "https://th.bing.com/th/id/OIP.5ZitBiyduIZWFL9GXQNR6gHaG9?pid=ImgDet&rs=1",
              titre : "Developpement PHP",
              pourcentage : "20%",
              exo_fait : "5",
              exo_total : "20",
              etat : "A faire"
            },
            {
              id : 6,
              img : "https://th.bing.com/th/id/OIP.6iV0XJJyibYGf4VpRV3J2gHaEz?pid=ImgDet&rs=1",
              titre : "Initiation WordPress",
              pourcentage : "80%",
              exo_fait : "8",
              exo_total : "10",
              etat : "A faire"
            },
            {
              id : 7,
              img : "https://th.bing.com/th/id/R.575c113496df85770f3b1469e868115d?rik=mgQ8U3CUGvCx3g&riu=http%3a%2f%2ftechmoka.com%2fwp-content%2fuploads%2f2018%2f03%2fagence-web-2.jpg&ehk=2mNqJVkdVy9zBXcKXPduupMh5aRDZJqze6y0Y6%2b9Fng%3d&risl=&pid=ImgRaw&r=0",
              titre : "Concevoir un Site Web HTML",
              pourcentage : "100%",
              exo_fait : "12",
              exo_total : "12",
              etat : "Terminer"
            },
            {
              id : 8,
              img : "https://th.bing.com/th/id/R.554b98cebf5dcab3f6cddb201bc9ba14?rik=HMp%2bWVgNvP%2fwwg&riu=http%3a%2f%2fhebergement.blog%2fwp-content%2fuploads%2f2017%2f06%2fserveur-informatique.jpg&ehk=cab1LCDdqoSwGsSchw9oMux%2bdPEC3z%2bLD2ZdjSm5YNs%3d&risl=&pid=ImgRaw&r=0",
              titre : "Serveur Tomcat",
              pourcentage : "0%",
              exo_fait : "0",
              exo_total : "20",
              etat : "A faire"
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
