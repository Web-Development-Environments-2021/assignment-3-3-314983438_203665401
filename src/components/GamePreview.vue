<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
      <b>Game Id:</b> {{ game_id }}
    </div>
    <ul class="game-content">
      <li> date: {{ date }}</li>
      <li> homeTeamId: {{ homeTeamId }}</li>
      <li> awayTeamId: {{ awayTeamId }}</li>
      <li> stadium: {{ stadium }}</li>
      <li> referee: {{ referee }}</li>
      <li> homeTeamScore: {{ homeTeamScore }}</li>
      <li> awayTeamScore: {{ awayTeamScore }}</li>

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
        type: String,
        required: true
      },
      awayTeamId: {
        type: String,
        required: true
      },
      stadium: {
        type: String,
        required: true
      },
      referee: {
        type: String,
        required: true
      },
      homeTeamScore: {
        type: String,
        required: true
      },
      awayTeamScore: {
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("game preview mounted")
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
