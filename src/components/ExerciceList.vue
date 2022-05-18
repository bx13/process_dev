<template>
  <div id="search-bar">
    <span class="subtitle2 trie">Réchercher le titre : </span>
    <!-- Choisir un attribut pour appliquer le filtre -->
    <input name="searchBy" id="search" v-model="search"/>
    <!-- Appliquer le filtre ascendant/descendant -->
    <!-- Rechercher un exercice -->
    <!--input type="text" v-model="searchValue" placeholder="Chercher un exercice" id="search-input">
    <i class="fa fa-search"></i-->
    <span class="subtitle2 trie">Trier par : </span>
    <!-- Choisir un attribut pour appliquer le filtre -->
    <select name="sortBy" id="select" v-model="sortBy">
      <option value="3">Titre</option>
      <option value="5">Durée</option>
      <option value="15">Retard</option>
      <option value="8">Avancement</option>
    </select>
    <!-- Appliquer le filtre ascendant/descendant -->
    <button  class="sort-button">
      <i v-on:click="ascending = !ascending" v-if="!ascending" class="fa fa-sort-up">Ascendant</i>
      <i v-on:click="ascending = !ascending" v-else class="fa fa-sort-down">Descendant</i>
    </button>

  </div>
  <div id="sort-bar">

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
      sortBy: '0',
      search: '',
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
        let fa = a[this.sortBy].toLowerCase(), fb = b[this.sortBy].toLowerCase();
        if(this.sortBy == "5"){
          fa = parseInt(fa);
          fb = parseInt(fb);
        }
        if (fa < fb) {
          return -1
        }
        if (fa > fb) {
          return 1
        }
        return 0
      });
      if (this.search !== ""){
        sortedExercices = sortedExercices.filter((item) => { return (item[3].includes(this.search))})
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
      console.log('No meta_donnee ExerciceList.');
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
input {
  margin-right: 16px;
  padding: 8px;
  border-radius: 20px;
  width: 290px;
}
.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}
</style>
