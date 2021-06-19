<template>
  <div class="player-preview">
    <div :title="id" class="player-title">
      <b></b> {{ name }}
            <b></b>
    </div>
    <ul class="player-content">
      <!-- <li> name: {{ name }}</li> -->
      <br/>
      <li> Position: {{ position }}</li>
      <li> Team name: {{ team_name }}</li>
      <!-- <li> image: {{ image }}</li> -->
      <br/>
      <img :src= image >
    </ul>
    <b-button style="margin: 0 auto; display: block;" type="submit" :to="{ name: 'PlayerPage' ,params: {player_id: `${this.player_id}`}}" href="#" variant="primary" >{{name}}</b-button>
  </div>
</template>

<script>
export default {
  name: "PlayerPreview",
  props: {
      player_id: {
        type: Number,
        required: true
      },
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
  width: 250px;
  height: 334px;
  position: relative;
  margin: 15px 40px;
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
