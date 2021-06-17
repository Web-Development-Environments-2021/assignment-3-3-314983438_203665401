<template>
  <div class="player_full-preview">
    <div :title="id" class="player_full-title">
      <b></b> {{ name }}
            <b></b>
    </div>
    <ul class="player_full-content">
      <br/>
      <li> nationality: {{ nationality }}</li>
      <li> birth date: {{ birthdate }}</li>
      <li> birth country: {{ birthcountry }}</li>
      <li> height: {{ height }}</li>
      <li> weight: {{ weight }}</li>

      <br/>
      <img :src= image >
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayerFullPage",
  props: {
      name: {
        type: String,
        required: true
      },
      image: {
        type: Image,
        required: true
      },
      nationality: {
        type: String,
        required: true
      },
      birthdate: {
        type: String,
        required: true
      },
      birthcountry: {
        type: Number,
        required: true
      },
      height: {
        type: String,
        required: true
      },
      weight: {
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
  height: 330px;
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
