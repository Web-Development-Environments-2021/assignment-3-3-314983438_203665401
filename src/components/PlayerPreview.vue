<template>
  <div class="player-preview">
    <div :title="id" class="player-title">
      <b>Game Id:</b> {{ game_id }}
    </div>
    <ul class="player-content">
      <li> name: {{ name }}</li>
      <li> image: {{ image }}</li>
      <img :src= image >
      <li> position: {{ position }}</li>
      <li> team_name: {{ team_name }}</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      name: {
        type: String,
        required: true
      },
      image: {
        type: Image,
        required: true
      },
      position: {
        type: Number,
        required: true
      },
      team_name: {
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("player preview mounted")
  } 
};
</script>

<style>
.player-preview {
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

.player-preview .player-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.player-preview .player-content {
  width: 100%;
  overflow: hidden;
}

</style>
