<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Formation en {{ formation }}
        </h1>
        <h2 class="subtitle">
          Accédez à une multitudes d'exercices de {{ formation }}  !
        </h2>
      </div>
    </div>
  </section>
  <section>
    <ExerciceList/>
  </section>
</template>

<script>
import ExerciceList from "./ExerciceList.vue";
import router from "../router";

export default {
  name: "HomePage",
  components: {
    ExerciceList,
  },
  data() {

    return {
      formation: "",
    }
  },
  beforeCreate() {
    if(localStorage.getItem("spreadsheetId") === null){
      router.push({ path: '/login' })
    }


  },
  mounted() {
    //console.log(localStorage.getItem("meta_donnee"));
    var data = JSON.parse(localStorage.getItem("meta_donnee"));
    if (data !=null && data.values.length > 0) {
      var meta_data = data.values[0];
      // Print columns A and E, which correspond to indices 0 and 4.
      this.formation = meta_data[2];

    } else {
      console.log('No meta_donnee homePage.');
      router.push({ path: '/login' });
    }

  }
};
</script>
