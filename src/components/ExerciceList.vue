<template>
  <div id="sort-bar">
    <span class="subtitle2 trie">Trier par : </span> 
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
      <Exercice  :exercice-id="exercice[0]" :exercice="exercice"/>         
    </div>
  </div>
</template>

<script>
import Exercice from "./Exercice.vue";
import router from "../router";
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

    //console.log(localStorage.getItem("exercices"));
    var data = JSON.parse(localStorage.getItem("exercices"));
    console.log(data);
    if (data !=null && data.values.length > 0) {
      this.exercices = data.values;
    } else {
      console.log('No meta_donnee.');
      router.push({ path: '/login' });
    }

  },
};
</script>

<style scoped>
.sort-button {
  margin-left:8px;
}
select {
  border-radius: 20px;
    margin-left: 8px;
    padding: 0 0 0 3px;
}
</style>
