<template>
<div class="bloc-trophee">
          <span class="num-trophee">{{ num_trophee }}</span> <img class ="trophee"
                             src="https://www.pointfxltd.com/campaigns/ramadan-2021-lp/cup.png"
                             alt="Placeholder image"
        />
        </div>
  <div class="columns is-multiline">
    <Module
      v-for="item in modules"
      :key="item[0]"
      class="column is-half-tablet is-half-desktop is-half-widescreen"
      :module-id="item[0]"
      :item="item"
    />
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
      num_trophee :0,
    };
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

    } else {
      console.log('No meta_donnee.');
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