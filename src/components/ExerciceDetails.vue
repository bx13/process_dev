<template>
  <p>
    <a class="navbar-item" :href="'/'">
      Retourner à la page précédente
    </a>
  </p>
  <div v-if="exercice !== null">
    <div class="card-image img-d" :style="{ cursor: 'true' ? 'pointer': ''}">
      <figure class="image is-4by3 img-d">
        <img class="img-d"
            :src="exercice[2]"
            alt="Placeholder image"
        />
      </figure>


    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ exerciceTitle }}</p>
        </div>
      </div>

      <div class="content">
        <p class="subtitle is-6">
          {{ exercice[3] }}
        </p>
        <p>
          {{ exercice[4] }}
        </p>
        <div>
          <a :href="url">
            {{ exercice[9] }} - {{ exercice[10] }}</a>
        </div>
        <p>Commentaire : {{ exercice[13] }}</p>
        <p>Feedback du coach : {{ exercice[14] }}</p>
        <div>
          <br/>
          <span>{{ exercice[8] }}</span>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


import router from "../router";

export default {
  name: "ExerciceDetails",
  props: {
    exerciceId: String,
  },
  components: {
  },
  data() {

    return {
      nextexerciceId: 1,
      exercice: null,
    };
  },
  beforeCreate() {
    if(localStorage.getItem("spreadsheetId") === null){
      router.push({ path: '/login' })
    }

  },
  mounted() {

    var isSignedIn = localStorage.getItem("isSignedIn");
    console.log(isSignedIn);
    //this.listCours();

    console.log(localStorage.getItem("exercices"));
    var data = JSON.parse(localStorage.getItem("exercices"));
    if (data.values.length > 0) {
      this.exercice = data.values[parseInt(this.exerciceId)-1];
      console.log("exercice");
      console.log(this.exercice);
    } else {
      alert('No meta_donnee.');
    }

  },
};
</script>

<style>
.img-d {
  width: 260px;
  height: 260px;
  margin: auto;
  border-radius: 30px;
  margin-top: 10px;
}
</style>