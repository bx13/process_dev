<template>
  <p>
    <a class="navbar-item" :href="'/'">
      Retourner à la page précédente
    </a>
  </p>
  <div v-if="composter !== null" class="card card-exercice" :class="{ 'composter-opened': isOpen, 'composter-closed': !isOpen}">
    <div class="card-image img-d" :style="{ cursor: 'true' ? 'pointer': ''}">
      <figure class="image is-4by3 img-d">
        <img class="img-d"
            :src="composter[2]"
            alt="Placeholder image"
        />
      </figure>


    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ componentTitle }}</p>
          <p class="subtitle is-6">{{ focusedDay }}</p>
        </div>
      </div>

      <div class="content">
        <p class="subtitle is-6">
          {{ composter[3] }}
        </p>
        <p>
          {{ composter[4] }}
        </p>
        <div  :class="{ 'adresse-opened': isOpen}">
          <a :href="url">
            {{ composter[9] }} - {{ composter[10] }}</a>
        </div>
        <p>Commentaire : {{ composter[13] }}</p>
        <p>FeedBack coach : {{ composter[14] }}</p>
        <div>
          <br/>
          <span>{{ composter[8] }}</span>
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
    composterId: String,
  },
  components: {
  },
  data() {

    return {
      nextComposterId: 1,
      composter: null,
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
      this.composter = data.values[parseInt(this.composterId)-1];
      console.log("composter");
      console.log(this.composter);
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