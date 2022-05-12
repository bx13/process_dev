<template>
  <div class="composter">
    <div class="card card-module" :class="{ 'composter-opened': isOpen, 'composter-closed': !isOpen}">
      <div class="card-image" :style="{ cursor: 'true' ? 'pointer': ''}">


      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ componentTitle }}</p>
          </div>
        </div>

        <div class="content">
          <p><span class="bold">{{ item[6] }}%</span> de réalisation</p>
          <p>
            {{ item[5] }} exercice(s) fait sur {{ item[3] }}
          </p>

          <div class="container">
            <div class="progress-bar__container">
              <div class="progress-bar" :style ="'transform: translate('+item[6]+'%, 0px); background-color: rgb(72, 149, 239);'">
                <span class="progress-bar__text">{{item[7] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Module",
  props: {
      moduleId: Number,
      item : Object,
  },
  data() {
    return {
      image: "./assets/img/compost1.png",
      url: "https://vuejs.org/",
      focusedDay: "",
    };
  },
  computed: {
    componentTitle() {
      return this.item[1];
    },
    isOpen() {
      return false
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.composter {
  padding: 10px;
}
.bold {
  font-weight: 600;
}
.card-exercice {
  border-radius: 25px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.progress-bar__container {
  width: 80%;
  height: 2rem;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  will-change: transform;
  box-shadow: 0 0 5px #e76f51;
}

.progress-bar {
  position: absolute;
  height: 100%;
  width: 100%;
  content: "";
  background-color: #e76f51;
  top:0;
  bottom: 0;
  left: -100%;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items:center;
  color: white;
  font-family: sans-serif;
}

.progress-bar__text {
  display: block;
  position: absolute;
  right: 16px;
}
</style>