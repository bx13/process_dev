<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Formation Online
        </h1>
        <h2 class="subtitle">
          Accédez à une multitudes d'exercices de programmation web  !
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

export default {
  name: "HomePage",
  components: {
    ExerciceList,
  },
};
</script>
