<template>
  <div>
    <!-- <h1 class="title">Search Page</h1>
      <br/>
      Your search Query: {{ searchQuery }} -->
          <h1 align = "center">
      {{this.teaminfo.team_name}}<br><br>
      <img :src= this.teaminfo.team_logo >
    </h1>
      <br>
      <h1 align = "center">Our Players:</h1><br>
      <PlayerPreview
      v-for="p in players"
      :player_id="p.player_id"
      :name="p.name" 
      :image="p.image" 
      :position="p.position" 
      :src="p.image"
      :team_name="p.team_name" 
      :key="p.name"></PlayerPreview>
      <br>
      <h1 align = "center">Future Games:</h1><br>
          <GamePreview
      v-for="g in teamfuturegames"
      :game_id="g.game_id"
      :date="g.date" 
      :homeTeamName="g.homeTeamName" 
      :awayTeamName="g.awayTeamName" 
      :stadium="g.stadium" 
      :referee="g.referee"
      :homeTeamScore="g.homeTeamScore"
      :awayTeamScore="g.awayTeamScore"
      :key="g.game_id"></GamePreview>
      <br>
      <h1 align = "center">Past Games:</h1><br>
          <GamePreview
      v-for="g in teampastgames"
      :game_id="g.game_id"
      :date="g.date" 
      :homeTeamName="g.homeTeamName" 
      :awayTeamName="g.awayTeamName" 
      :stadium="g.stadium" 
      :referee="g.referee"
      :homeTeamScore="g.homeTeamScore"
      :awayTeamScore="g.awayTeamScore"
      :key="g.game_id"></GamePreview>
  </div>
</template>

<script>
import PlayerPreview from "../components/PlayerPreview.vue";
import GamePreview from "../components/GamePreview.vue";

export default {
  name: "PlayerPage",
    components: {
    PlayerPreview,
    GamePreview
  }, 
 data() {
    return {
      players: [],
      teamfuturegames: [],
      teampastgames: [],
      teaminfo: []
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
        console.log("asafafafs");
        console.log(response);

        /* team players */
        const players = response.data.team_details;
        this.players = [];
        this.players.push(...players);

        /* team games */

        //future games
        const futuregames = response.data.futuregames;
        this.teamfuturegames = [];
        this.teamfuturegames.push(...futuregames);
        //future games
        const pastgames = response.data.pastgames;
        this.teampastgames = [];
        this.teampastgames.push(...pastgames);

        /* team information */
        this.teaminfo = []
        this.teaminfo = team_id.data[0];


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