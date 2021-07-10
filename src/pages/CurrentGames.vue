<template>
  <div>
      <h2>FUTURE GAMES:<br></h2>
    <GamePreview
      v-for="g in future_games"
      :game_id="g.game_id"
      :date="g.date" 
      :homeTeamName="g.homeTeamName" 
      :awayTeamName="g.awayTeamName" 
      :stadium="g.stadium" 
      :referee="g.referee"
      :showButton="true"
      :key="g.game_id"></GamePreview>
      <br>
      <h2>PAST GAMES:<br></h2>
    <GamePreview
      v-for="g in past_games"
      :game_id="g.game_id"
      :date="g.date" 
      :homeTeamName="g.homeTeamName" 
      :awayTeamName="g.awayTeamName" 
      :stadium="g.stadium" 
      :referee="g.referee"
      :homeTeamScore="g.homeTeamScore"
      :awayTeamScore="g.awayTeamScore"
      :events="g.events"
      :showButton="false"
      :key="g.game_id"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "../components/GamePreview.vue";
export default {
  name: "CurrentGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      future_games: [],
      past_games: [],
    };
  },
  methods: {
    async futuregames(){
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/league/futureGames",
        );
        this.axios.defaults.withCredentials = false;
        const games = response.data;

        this.future_games = [];
        this.future_games.push(...games);

      } catch (error) {
        console.log("error in future Games")
        console.log(error);
        this.$root.toast("futureGames", error.response.data, "fail");

      }
    },
    async pastgames(){
      //console.log("response");
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/league/pastGames",
        );
        this.axios.defaults.withCredentials = false;
        const games = response.data;
        this.past_games = [];
        this.past_games.push(...games);
        // console.log(this.past_games);
      } catch (error) {
        console.log("error in past Games")
        console.log(error);
        this.$root.toast("pastGames", error.response.data, "fail");

      }
    }
  }, 
  mounted(){
    // console.log("future Games mounted");
    this.futuregames(); 
    this.pastgames();
    // console(this.past_games); 
  }
};
</script>

<style></style>
