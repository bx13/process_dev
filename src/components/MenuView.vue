<template>
  <nav class="navbar box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img
          class="navbar-brand-img"
          :src="logo"
      />


      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': mobileMenuActive }"
        @click="mobileMenuActive = !mobileMenuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': mobileMenuActive }">
      <div class="navbar-start">
        <router-link class="navbar-item"  :class="{ 'false' : isConnected === 'true'}" to="/">
          Accueil
        </router-link>
        <router-link class="navbar-item" :class="{ 'false' : isConnected === 'true'}" to="/trophee">
          Trophée
        </router-link>
        <router-link class="navbar-item" :class="{ 'false' : isConnected === 'true'}" to="/about">
          Contact
        </router-link>
      </div>

      <div class="navbar-end">
        <router-link id='btn_connexion' :class="{ 'navbar-item btn-connexion': true, 'cacher' : isConnected === 'true'}" to="/login">
          Connexion
        </router-link>
        <div :class="{ 'navbar-item copyright email_user': true, 'cacher' : isConnected === 'false'}" >
          {{email}}
        </div>
        <button :class="{ 'navbar-item btn-deconnexion': true, 'cacher' : isConnected === 'false'}" @click="LogoutGoogle">
          Deconnexion
        </button>

      </div>
    </div>
  </nav>

  <nav class="navbar box bottom" role="navigation" aria-label="main navigation">


    <div class="navbar-menu " :class="{ 'is-active': true }">
      <div class="navbar-start">
        <router-link class="navbar-item" :class="{ 'cacher' : isConnected === 'false'}" to="/">
          Accueil
        </router-link>
        <router-link class="navbar-item" :class="{ 'cacher' : isConnected === 'false'}" to="/trophee">
          Trophée
        </router-link>
        <router-link class="navbar-item" :class="{ 'cacher' : isConnected === 'false'}" to="/about">
          Contact
        </router-link>
      </div>


    </div>
  </nav>
</template>

<script>


export default {
  name: "MenuView",
  data() {
    return {
      mobileMenuActive: false,
      isConnected : 'false',
      email : '',
      logo : '',
      traduction: [],
    };
  },
  mounted() {
    document.addEventListener('itemInserted', this.getDataUser, false);

    //console.log(localStorage.getItem("meta_donnee"));
    var data = JSON.parse(localStorage.getItem("meta_donnee"));
    if (data !=null && data.values.length > 0) {
      var meta_data = data.values[0];
      // Print columns A and E, which correspond to indices 0 and 4.
      this.logo = meta_data[1];
      this.traduction = JSON.parse(localStorage.getItem("traductions"));
      console.log(this.traduction);
    } else {
      console.log('No meta_donnee MenuView.');
    }
    this.getDataUser();
    },

  methods: {
    LogoutGoogle() {
      document.getElementById('signout_button').click();
      window.location.href=window.location.origin+"/login";
    },
    getDataUser() {
      console.log('getDataUser');
       console.log(this.traduction.values[24][1]);
      if(window.location.origin.includes("localhost:")){
        console.log('web');
        this.isConnected = localStorage.getItem("isSignedIn") || 'false';
        this.email = localStorage.getItem("email") || '';
      }else {
        console.log('mobile');
        this.isConnected = this.logo.length>0 ? 'true' : 'false';
        console.log(this.logo);
        console.log(this.logo.length);
        console.log(this.isConnected);
        if(this.isConnected == 'true' ){
          this.email = this.traduction.values[24][1];
          console.log(this.email);
        }
      }
    }
  },
  computed : {

  }
};
</script>

<style scoped>


.bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 0;
  margin: 0;
  height: 50px!important;
}
.bottom .navbar-menu {
  box-shadow: none;
}
.bottom a {
  display: inline-flex;
}
.cacher {
  display : none;
}
.btn-connexion {
  background: #83bad3;
  border-radius: 20px;
  color: white;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
}
.btn-deconnexion {
  background: #d3839d;
  border-radius: 20px;
  color: white;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  border: none;
  margin-left: 8px;
}
.navbar {
  height: 70px;
}
.navbar-brand-img {
  margin-left: 10px;
  height: 68px;
  /* width: 35px; */
  margin-top: -22px;
}
.animated {
  position: relative;
  z-index: 0;
  margin-right: 5px;
  margin-left: 5px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
}
.navbar.box{border-top-left-radius: 0px;border-top-right-radius: 0px;}
.animated::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #399953;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(#7fff00, #32cd32),
    linear-gradient(#32cd32, #228b22), linear-gradient(#f4a460, #a0522d),
    linear-gradient(#a0522d, #800000);
  animation: rotate 4s linear infinite;
}

.animated::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 5px;
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
