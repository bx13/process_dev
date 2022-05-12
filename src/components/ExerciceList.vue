<template>
  
  <div id="sort-bar">
    Trier par :
     <!-- Choisir un attribut pour appliquer le filtre -->
    <select name="sortBy" id="select" v-model="sortBy">
      <option value="alphabetically">Titre</option>
      <option value="adresse">Durée</option>
    </select>
     <!-- Appliquer le filtre ascendant/descendant -->
    <button v-on:click="ascending = !ascending" class="sort-button">
      <i v-if="!ascending" class="fa fa-sort-up">Ascendant</i>
      <i v-else class="fa fa-sort-down">Descendant</i>
    </button>
    <!-- Rechercher un exercice -->
    <!--input type="text" v-model="searchValue" placeholder="Chercher un exercice" id="search-input">
    <i class="fa fa-search"></i-->

  </div>

  <div class="columns is-multiline">
    <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      v-for="exercice in sortedArray"
      :key="exercice[0]">
      <Exercice :exercice-id= exercice[0] :exercice= "exercice"/>         
    </div>
  </div>
</template>

<script>
import Exercice from "./Exercice.vue";
export default {
  name: "ExerciceList",
  components: {
    Exercice,
  },
  data() {
    return {
      nextexerciceId: 1,
      exercices: new Array(),
      ascending: true,
      sortBy: 'alphabetically',
      // lecture du texte rechercher exercice 
      //searchValue: '',
      duree : null,
    };
  },
  methods: {
    listCours() {

      var gapi = localStorage.getItem("gapi");
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1PcuPqNiXu3L68hWIK6neAIe6M5fRST4vR8af3d6fXS4',
        range: 'data!A2:B',
      }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
          console.log('Name, Major:');
          for (var i = 0; i < range.values.length; i++) {
            var row = range.values[i];
            // Print columns A and E, which correspond to indices 0 and 4.
            console.log(row[0] + ', ' + row[1]);
          }
        } else {
          console.log('No data found.');
        }
      }, function (response) {
        console.log('Error: ' + response.result.error.message);
      });
    }
  },

  computed: {
    sortedArray() {
      let sortedExercices = this.exercices;
      
      /*if (this.searchValue != '' && this.searchValue) {
        sortedExercices = sortedExercices.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }*/

      sortedExercices = sortedExercices.sort((a,b) => {
        let fa = a[3].toLowerCase(), fb = b[3].toLowerCase();
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      });
      if (this.duree){
        sortedExercices = sortedExercices.filter((item) => { return (item[5] <= this.duree)})
      }
      if (!this.ascending) {
        sortedExercices.reverse();
      }
        
        
      console.log(sortedExercices);
      return sortedExercices;
    }
  },
  mounted() {


    var isSignedIn = localStorage.getItem("isSignedIn");
    console.log(isSignedIn);
    //this.listCours();

    console.log(localStorage.getItem("exercices"));
    var data = JSON.parse(localStorage.getItem("exercices"));
    if (data !=null && data.values.length > 0) {
      this.exercices = data.values;

    } else {
      alert('No meta_donnee.');
    }

  },
};
</script>

<style>
.sort-bar {
  width: 80%;
  height: 80px;
  margin-left: 10px;
  background-color: #f2e0c1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.sort-button {
  background-color: rgba(0,0,0,0);
  border: none;
  margin-bottom: 15px;
  height: 50px;
  width: 50px;
}
.ascending-icon {
  height: 30px;
  height: 100%;
  width: 30px;
}

#select {
  background-color: rgba(0,0,0, 0);
  border: none;
}
</style>
