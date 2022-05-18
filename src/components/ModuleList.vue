<template>
<div class="bloc-trophee">
          <span class="num-trophee">{{ num_trophee }}</span> <img class ="trophee"
                             src="https://www.pointfxltd.com/campaigns/ramadan-2021-lp/cup.png"
                             alt="Placeholder image"
        />

        </div>
  <p class="share_realisation" @click="share">Partagez mes réalisations avec amis</p>
  <br>
  <div class="columns is-multiline">
    <Module
      v-for="item in modules"
      :key="item[0]"
      class="column is-half-tablet is-half-desktop is-half-widescreen"
      :module-id="item[0]"
      :item="item"
    />
  </div>
  <br>
  <h2 class="title is-4">Liste des défis réalisés</h2>
  <div class="columns is-multiline">
    <li
        v-for="item in exercices"
        :key="item[0]"
        class="column is-half-tablet is-half-desktop is-half-widescreen"
    ><a class="" :href="'/exercice/'+item[0]">
      {{ item[3] }}
    </a> </li>
  </div>
</template>

<script>
import Module from "./Module.vue";
import router from "../router";
export default {
  name: "ModuleList",
  components: {
    Module,
  },
  data() {
    return {
      nextComposterId: 1,
      modules: new Array(),
      exercices: new Array(),
      num_trophee :0,
    };
  },
  methods : {
    share() {
      navigator.share({
        title: document.title,
        text: "Yess ! J'ai "+this.num_trophee+" trophées sur Erudit!",

      });
    },
  },
  mounted() {
    var data = JSON.parse(localStorage.getItem("modules"));
    console.log(data);
    if (data !=null && data.values.length > 0) {
      this.modules = data.values;
      for(var i =0; i<this.modules.length;i++){
        if(this.modules[i][6]=="100") {
          this.num_trophee++;
        }
      }
      var exercices = JSON.parse(localStorage.getItem("exercices"));
      console.log("exercices");
      console.log(exercices);
      this.exercices = exercices.values;
      this.exercices = this.exercices.filter((item) => { return (item[12] !== "" && item[6] === "Defi")});

    } else {
      console.log('No meta_donnee ModuleList.');
      router.push({ path: '/login' });
    }
  },
};
</script>
<style scoped>
.trophee {
  max-width: 190px;
}
.bloc-trophee {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 14px;
}
.num-trophee {
  font-size: 56px;
  font-weight: 800;
}

</style>