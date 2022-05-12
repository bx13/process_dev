<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Suivi de mes réalisations
        </h1>
        
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
