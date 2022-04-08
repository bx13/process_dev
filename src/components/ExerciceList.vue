<template>

  <div class="columns is-multiline">
    <Exercice
      v-for="exercice in exercices"
      :key="exercice[0]"
      class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
      :exercice-id="exercice[0]"
      :exercice="exercice"
    />
  </div>
</template>

<script>
import Exercice from "./Exercice.vue";
export default {
  name: "ExerciceList",
  components: {
    Exercice,
  },
  data() {
    return {
      nextexerciceId: 1,
      exercices: new Array(),
    };
  },
  methods: {
    listCours() {

      var gapi = localStorage.getItem("gapi");
      gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1PcuPqNiXu3L68hWIK6neAIe6M5fRST4vR8af3d6fXS4',
        range: 'data!A2:B',
      }).then(function (response) {
        var range = response.result;
        if (range.values.length > 0) {
          console.log('Name, Major:');
          for (var i = 0; i < range.values.length; i++) {
            var row = range.values[i];
            // Print columns A and E, which correspond to indices 0 and 4.
            console.log(row[0] + ', ' + row[1]);
          }
        } else {
          console.log('No data found.');
        }
      }, function (response) {
        console.log('Error: ' + response.result.error.message);
      });
    }
  },
  mounted() {


    var isSignedIn = localStorage.getItem("isSignedIn");
    console.log(isSignedIn);
    //this.listCours();

    console.log(localStorage.getItem("exercices"));
    var data = JSON.parse(localStorage.getItem("exercices"));
    if (data !=null && data.values.length > 0) {
      this.exercices = data.values;

    } else {
      alert('No meta_donnee.');
    }

  },
};
</script>
