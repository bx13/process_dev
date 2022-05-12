<template>
  
  <div class="flex-container">
    <div class="flex-item">
      <div v-if="exercice !== null" class="card">
        <a class="navbar-item" :href="'/'">
      Retourner à la page précédente
    </a>
        <div class="card-image img-d" :style="{ cursor: 'true' ? 'pointer': ''}">
          <figure class="image is-4by3 img-d">
            <img class="img-d"
                :src="exercice[2]"
                alt="Placeholder image"
            />
          </figure>


        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h3 class="title subtitle">{{ exerciceTitle }}</h3>
            </div>
          </div>

          <div class="content">
            <p class="subtitle2 ">
              {{ exercice[1] }}
            </p>
            <h3 class="subtitle ">
              {{ exercice[3] }}
            </h3>
            
            <p style="max-width: 725px;margin: auto;">
              {{ exercice[4] }}
            </p>
            <div>
                
            </div>
            
            
          
          <div class="flex-container">
              <div class="flex-item">
                <p>Commentaire stagiaire</p>
                <textarea rows="6" cols="50" v-model="exercice[16]">
                </textarea>   
              </div>
              <div class="flex-item">
                <ul class="timeline">
                  <li v-if="exercice[9] !== ''"><span class="badge">Date debut previsionnelle: {{ exercice[9] }} </span></li>
                  <li v-if="exercice[11] !== ''"><span class="badge">Date fin previsionnelle: {{ exercice[11] }}</span></li>
                  <li><span class="badge">Durée estimée : {{ exercice[5] }} jours</span></li>
                  <li v-if="exercice[10] !== ''"><span class="badge">Date debut réel : {{ exercice[10] }}</span></li>
                  <li v-if="exercice[12] !== ''"><span class="badge">Date fin réel : {{ exercice[12] }}</span></li>
                  <li v-if="exercice[15] !== ''"><span class="badge" style="background:#992f4c;">Retard : {{ exercice[15]}} jours</span></li>
                  <li><span class="badge">Type d'exercice : {{ exercice[6]}}</span></li>
                  <li><span class="badge">Etat : {{ exercice[8] }}</span></li>
                </ul>
              </div>
              <div class="flex-item">
                <p>Feedback du coach </p>
                <textarea rows="6" cols="50" readonly v-model="exercice[17]">
                
                </textarea> 
              </div>
          </div>
            <div class="list-bouton">
              <button @click="commencer" v-if="exercice[9] !== ''" :class="{ 'disabled': isCommencer}" :style="{background:traductions[12][4],color:traductions[12][3]}">{{traductions[12][1]}}</button>
              <button @click="terminer" v-if="exercice[11] !== ''" :class="{ 'disabled': isTerminer}" :style="{background:traductions[13][4],color:traductions[13][3]}">{{traductions[13][1]}}</button>
              <button @click="sendCommentaire" :style="{background:traductions[14][4],color:traductions[14][3]}">{{traductions[14][1]}}</button>
              <button @click="reinitialiser" v-if="exercice[10] !== ''" :style="{background:traductions[15][4],color:traductions[15][3]}">{{traductions[15][1]}}</button>
              <button @click="reprendre" v-if="exercice[12] !== ''"  :style="{background:traductions[16][4],color:traductions[16][3]}">{{traductions[16][1]}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-item">
      <div class="card">

      </div>
    </div>
  </div>



</template>

<script>


import router from "../router";

export default {
  name: "ExerciceDetails",
  props: {
    exerciceId: String,
  },
  components: {
  },
  computed: {
    isCommencer() {
      return this.exercice[10] !== "" ;
    },
    isTerminer() {
      return this.exercice[12] !== "" ;
    },
  },
  data() {

    return {
      nextexerciceId: 1,
      exercice: null,
      traductions : null,
      date : null,
    };
  },
  methods : {
    sendCommentaire() {
      if (this.exercice[16].trim()===""){
        this.$toast.error(`Veuilez saisir votre commentaire !`, {position: 'top',duration :2000});
      } else {
        this.updateDataExcel("Q",this.exercice[16],"Ajout d'un commentaire à l'exercice "+this.exerciceId,"Un nouveau commentaire a été ajouté à l'exercice "+this.exerciceId+"-"+this.exercice[3]);
        this.$toast.info(`Votre commentaire a été enregistré !`, {position: 'top',duration :2000});
      }
      
    },
    commencer() {
      if (this.exercice[10] === ""){
        
        this.exercice[10] = this.date;
        this.calculRetard();
        this.updateDataExcel("K",this.date,"Debut exercice "+this.exerciceId,"L'exercice "+this.exerciceId+"-"+this.exercice[3]+" a été commencé");
      }
    },
    terminer() {
      if (this.exercice[9] !== '' && this.exercice[10] == ''){
        this.$toast.error(`Vous devez d'abord commencer l'exercice!`, {position: 'top',duration :2000});
      } else if (this.exercice[12] === ""){
        this.exercice[12] = this.date;
        this.exercice[15] = "";
        this.calculRetard();
        this.updateDataExcel("M",this.date,"Fin exercice "+this.exerciceId,"L'exercice "+this.exerciceId+"-"+this.exercice[3]+" a été terminé");
      }
    },
    reinitialiser() {
      this.exercice[10] = "";
      this.exercice[12] = "";
      localStorage.setItem('ignore_first_mail',"true");
      this.updateDataExcel("k","","Réinitialisation exercice "+this.exerciceId,"L'exercice "+this.exerciceId+"-"+this.exercice[3]+" a été réinitialisé");
      var self = this;
      setTimeout(function(){ self.updateDataExcel("M","","Réinitialisation exercice "+this.exerciceId,"L'exercice "+this.exerciceId+"-"+this.exercice[3]+" a été réinitialisé"); }, 1500);
      this.$toast.info(`Exercice reinitiliser !`, {position: 'top',duration :2000});
      
    },
    reprendre() {
      this.exercice[12] = "";
      this.updateDataExcel("M","","Reprise exercice "+this.exerciceId,"L'exercice "+this.exerciceId+"-"+this.exercice[3]+" a été repris");
      this.$toast.info(`Exercice repris !`, {position: 'top',duration :2000});
    }, 
    calculRetard() {
      this.exercice[15] = "";
    },
    updateDataExcel(cible,value,objet_mail,contenu_mail) {
        localStorage.setItem('range',"Exercices!"+cible+(parseInt(this.exerciceId)+1));
        localStorage.setItem('new_value',value);
        localStorage.setItem('objet_mail',objet_mail);
        localStorage.setItem('contenu_mail',contenu_mail);
        document.getElementById('update_data_excel').click();
    } 
    
  },
  beforeCreate() {
    if(localStorage.getItem("spreadsheetId") === null){
      router.push({ path: '/login' })
    }

  },
  mounted() {

    var isSignedIn = localStorage.getItem("isSignedIn");
    console.log(isSignedIn);
    //this.listCours();

    console.log(localStorage.getItem("exercices"));
    var data = JSON.parse(localStorage.getItem("exercices"));
    if (data !=null && data.values.length > 0) {
      this.exercice = data.values[parseInt(this.exerciceId)-1];
      this.traductions = JSON.parse(localStorage.getItem("traductions")).values;
      var date = new Date();
      this.date = ('0'+date.getDate()).slice(-2)+"/"+('0'+(date.getMonth()+1)).slice(-2)+"/"+date.getFullYear() ;
      console.log("exercice");
      console.log(this.exercice);
    } else {
      console.log('No meta_donnee.');
      router.push({ path: '/login' });
    }

  },
};
</script>

<style>
button {
  background: #83bad3;
  border-radius: 20px;
  color: white;
  box-shadow: 0 0px 1px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      border: none;
    margin-right: 8px;
    padding: 5px 12px;
}
.disabled{
    
    filter: blur(0.85px);
}
.list-bouton{
  margin-top:12px;
}
.img-d {
  width: 175px!important;
  height: 175px!important;
  margin: auto;
  margin-top: 10px;
  border-radius: 50%;
  box-shadow: 0 0px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)!important;
}
ul.timeline li
{
  position: relative;
   height: 2em;
  color: #888;
}

ul,li {
  list-style-type: none;
}
textarea {
      border-radius: 20px;
    padding: 12px;
}
.badge {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: #fff;
    background-color: #1d1f22;
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
    font-weight: 400 !important;
}
.flex-container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
      align-items: center;
}
.flex-item {
      margin: 0 8px;
}
</style>