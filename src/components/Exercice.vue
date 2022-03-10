<template>
  <div class="composter">
    <a class="navbar-item" :href="'/exercice/'+composterId">
    <div class="card card-exercice" :class="{ 'composter-opened': isOpen, 'composter-closed': !isOpen}">
      <div class="card-image" :style="{ cursor: 'true' ? 'pointer': ''}">
        <figure class="image is-4by3">
          <img
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
          <p>
            {{ composter[1] }}
          </p>
          <div  :class="{ 'adresse-opened': isOpen}">
            <a :href="url">
              {{ composter[9] }} </a>
          </div>
          <div>
            <br/>
            <span :class="{ 'etat': true, 'afaire': isAfaire, 'encours': isEncours, 'terminer': isTerminer}">{{ composter[8] }}</span>
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
      composterId: Number,
      composter : Object,
  },
  data() {
    return {
      image: "./assets/img/compost1.png",
      url: "https://vuejs.org/",
      focusedDay: "",
    };
  },
  mounted() {
    console.log(this.composter);
  },
  computed: {
    componentTitle() {
      return this.composter[3];
    },
    isOpen() {
      return false
    },
    isAfaire() {
      return this.composter[8] === "A faire" ;
    },
    isEncours() {
      return this.composter[8] === "En cours" ;
    },
    isTerminer() {
      return this.composter[8] === "Terminé" ;
    },
    adresse() {
      return '28 rue des plantes en pots ' + (this.composterId % 3 == 0 ? '4400 Nantes' : 'Toulouse')
    }
  },
  methods: {
    addOpeningSchedule() {
      this.openingSchedules.push({
        day: "Dimanche",
        opening_hour: 9,
        closing_hour: 12,
      });
    },

    removeFirstOpeningSchedule() {
      this.openingSchedules.pop();
    },

    updateFocusedDay(schedule) {
      this.focusedDay = schedule.day;
    },
  },
};
</script>

<style scoped>
.composter {
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
.composter-opened {
  background-color: #A6D785;
  border: 2px solid #3B5E2B;
  margin: 10px;
}
.composter-closed {
  background-color: #F5F5F5;
  border: 2px dashed #C0C0C0;
  margin: 10px;
}
.adresse-in-toulouse {
  background-color: pink;
}
.adresse-in-nantes {
  background-color: yellow;
}
.adresse-opened {
  font-weight: bolder;
}
</style>