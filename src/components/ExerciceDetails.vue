<template>
  <p class="columns">
    Détail de l'exercice {{ composterId }}
  </p>
  <p>
    <a class="navbar-item" :href="'/'">
      Retourner à la page précédente
    </a>
  </p>
  <div class="card card-exercice" :class="{ 'composter-opened': isOpen, 'composter-closed': !isOpen}">
    <div class="card-image" :style="{ cursor: 'true' ? 'pointer': ''}">
      <figure class="image is-4by3">
        <img
            :src="composter.img"
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
        <p>
          {{ composter.titre }}
        </p>
        <div  :class="{ 'adresse-opened': isOpen}">
          <a :href="url">
            {{ composter.date_debut }} </a>
        </div>
        <div>
          <br/>
          <span :class="{ 'etat': true, 'afaire': isAfaire, 'encours': isEncours, 'terminer': isTerminer}">{{ composter.etat }}</span>
        </div>
      </div>
    </div>
  </div>


</template>

<script>


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
      composter: {
        id : 1,
        img : "https://th.bing.com/th/id/OIP.5ZitBiyduIZWFL9GXQNR6gHaG9?pid=ImgDet&rs=1",
        titre : "Les bases du Web",
        description : "",
        date_debut : "Lundi 01 mars 2022",
        date_fin : "",
        etat : "A faire"
      },
    };
  },
};
</script>
