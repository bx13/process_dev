<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Suivi de mes réalisations
        </h1>
        <div class="bloc-trophee">
          <span class="num-trophee">2</span> <img class ="trophee"
                             src="https://www.pointfxltd.com/campaigns/ramadan-2021-lp/cup.png"
                             alt="Placeholder image"
        />
        </div>
        <ModuleList />
      </div>
    </div>
  </section>
</template>

<script>
import ModuleList from "./ModuleList.vue";
import router from "../router";
export default {
  name: "TropheePage",
  components: {ModuleList},
  props: {
    message: String,
  },
  beforeCreate() {
    if(localStorage.getItem("spreadsheetId") === null){
      router.push({ path: '/login' })
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