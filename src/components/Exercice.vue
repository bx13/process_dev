<template>
  <div class="exercice">
    <a class="navbar-item" :href="'/exercice/'+exerciceId">
    <div class="card card-exercice" :class="{ 'exercice-actif': isActif, 'exercice-inactif': !isActif}">
      <div class="card-image" :style="{ cursor: 'true' ? 'pointer': ''}">
        <figure class="image is-4by3">
          <img
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
          <p>
            {{ exercice[1] }}
          </p>
          <div  :class="{ 'adresse-actif': isActif}">
            <a :href="url">
              {{ exercice[9] }} </a>
          </div>
          <div>
            <br/>
            <span :class="{ 'etat': true, 'afaire': isAfaire, 'encours': isEncours, 'terminer': isTerminer}">{{ exercice[8] }}</span>
          </div>
        </div>
      </div>
    </div>
    </a>
  </div>
</template>

<script>

export default {
  name: "Exercice",
  props: {
      exerciceId: Number,
      exercice : Object,
  },
  mounted() {
    console.log(this.exercice);
  },
  computed: {
    exerciceTitle() {
      return this.exercice[3];
    },
    isActif() {
      return false
    },
    isAfaire() {
      return this.exercice[8] === "A faire" ;
    },
    isEncours() {
      return this.exercice[8] === "En cours" ;
    },
    isTerminer() {
      return this.exercice[8] === "Terminé" ;
    },
    adresse() {
      return '28 rue des plantes en pots ' + (this.exerciceId % 3 == 0 ? '44000 Nantes' : 'Toulouse')
    }
  },
};
</script>

<style scoped>
.exercice {
  padding: 10px;
}
.card-exercice {
  border-radius: 25px;
}
.etat {
  padding: 8px;
  border-radius: 14px;
}
.afaire{
  background: #d67292;
}
.terminer{
  background: #75c389;
}
.encours{
  background: #c3c375;
}
.navbar-item img {
  max-height: none;
}
.exercice-actif {
  background-color: #A6D785;
  border: 2px solid #3B5E2B;
  margin: 10px;
}
.exercice-inactif {
  background-color: #F5F5F5;
  border: 2px dashed #C0C0C0;
  margin: 10px;
}
.adresse-actif {
  font-weight: bolder;
}
</style>