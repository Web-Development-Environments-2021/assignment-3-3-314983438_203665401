<template>
  <div class="team-preview">
    <div :title="id" class="team-title">
      <b>Team name:</b> {{ team_name }}
    </div>
    <ul class="team-content">
      <br>
      <img :src= team_logo >
    </ul>
        <b-button style="margin: 0 auto; display: block;" type="submit" :to="{ name: 'TeamPage' ,params: {team_name: `${team_name}`}}" href="#" variant="primary" >{{team_name}}</b-button>

  </div>
</template>

<script>
export default {
  name: "TeamPreview",
  props: {
      team_id: {
        type: Number,
        required: true
      },
      team_name: {
        type: String,
        required: true
      },
      team_logo: {
        type: Image,
        required: true
      }
  }, 
  mounted(){
    console.log("team preview mounted")
  } 
};
</script>

<style>
.team-preview {
  display: inline-block;
  width: 300px;
  height: 250px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.team-preview .team-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.team-preview .team-content {
  width: 100%;
  overflow: hidden;
}



</style>
