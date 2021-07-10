<template>
  <div class="game-preview">
    <!-- what is title???? -->
    <div class="game-title">
      <b>Game Id:</b> {{ game_id }}
    </div>
    <ul class="game-content">
      <li> Date: {{ date }}</li>
      <li> Home Team Name: {{ homeTeamName }}</li>
      <li> Away Team Name: {{ awayTeamName }}</li>
      <li> Stadium: {{ stadium }}</li>
      <li v-if="referee != NULL"> referee: {{ referee }}</li>
      <li v-if="homeTeamScore != NULL && awayTeamScore != NULL"> Result {{ homeTeamScore }} - {{ awayTeamScore }}</li>
    </ul>
    <b-button v-on:click="addToFavorites()" type="submit" class="button" variant="primary">Add To Favorites</b-button>
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      game_id: {
        type: Number,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      homeTeamName: {
        type: String,
        required: true
      },
      awayTeamName: {
        type: String,
        required: true
      },
      stadium: {
        type: String,
        required: true
      },
      referee: {
        type: String,
        // required: true
      },
      homeTeamScore: {
        type: Number,
        // required: true
      },
      awayTeamScore: {
        type: Number,
        // required: true
      }
  }, 
  methods: {
    async addToFavorites(){

    }
  },
  mounted(){
    console.log("game preview mounted");
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 300px;
  height: 220px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}

.game-preview .button {
  display:table;
  margin: 0 auto;
}

</style>
