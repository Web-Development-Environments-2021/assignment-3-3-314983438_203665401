<template>
  <div>
    <!-- <h1 class="title">Search Page</h1>
      <br/>
      Your search Query: {{ searchQuery }} -->
      Players:<br>
      <PlayerPreview
      v-for="p in players"
      :player_id="p.player_id"
      :name="p.name" 
      :image="p.image" 
      :position="p.position" 
      :src="p.image"
      :team_name="p.team_name" 
      :key="p.name"></PlayerPreview>
  </div>
</template>

<script>
import PlayerPreview from "../components/PlayerPreview.vue";
export default {
  name: "PlayerPage",
    components: {
    PlayerPreview
  }, 
 data() {
    return {
      players: [],
    };
  },
    methods: {
    async TeamPlayers(teamname){
      //console.log("response");
      try {

        /* searching team details */
        const team_id = await this.axios.get(
         `http://localhost:3000/teams/SearchTeamByName/${teamname}`,
        );
        //console.log(team_id.data[0]);
        const response = await this.axios.get(
        `http://localhost:3000/teams/SearchTeamById/${team_id.data[0].team_id}`,
        //  `http://localhost:3000/teams/SearchTeamById/939`,
        );
        const players = response.data;
        this.players = [];
        this.players.push(...players);

      } catch (error) {
        console.log("error in team players");
        console.log(error);
        //this.$root.toast("Team Players", error.response.data, "fail");
        this.$root.toast("No Result Found", "We are sorry, we did not found anything for " + `${search}`, "fail");

      }
    }
  }, 
  mounted(){
    console.log("team page mounted");
    this.TeamPlayers(this.$route.params.team_name); 
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>