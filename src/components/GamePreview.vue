<template>
  <div class="game-preview">
    <!-- what is title???? -->
    <div class="game-title">
      <b>Game Id:</b> {{ game_id }}
    </div>
    <ul class="game-content">
      <li> date: {{ date }}</li>
      <li> homeTeamId: {{ homeTeamId }}</li>
      <li> awayTeamId: {{ awayTeamId }}</li>
      <li> stadium: {{ stadium }}</li>
      <li v-if="referee"> referee: {{ referee }}</li>
      <li v-if="homeTeamScore >= 0"> homeTeamScore: {{ homeTeamScore }}</li>
      <li v-if="awayTeamScore >= 0"> awayTeamScore: {{ awayTeamScore }}</li>

    </ul>
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
      homeTeamId: {
        type: Number,
        required: true
      },
      awayTeamId: {
        type: Number,
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



</style>
