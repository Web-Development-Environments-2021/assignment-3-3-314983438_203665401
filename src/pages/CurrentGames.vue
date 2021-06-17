<template>
  <div>
      FUTURE GAMES:<br>
    <GamePreview
      v-for="g in future_games"
      :game_id=0
      :date="g.date" 
      :homeTeamId="g.homeTeamId" 
      :awayTeamId="g.awayTeamId" 
      :stadium="g.stadium" 
      :referee=NULL
      :homeTeamScore=0
      :awayTeamScore=0
      :key="g.date"></GamePreview>
      <br>
      PAST GAMES:<br>
    <GamePreview
      v-for="g in past_games[0]"
      :game_id="g.game_id"
      :date="g.date" 
      :homeTeamId="g.homeTeamId" 
      :awayTeamId="g.awayTeamId" 
      :stadium="g.stadium" 
      :referee=NULL
      :homeTeamScore=0
      :awayTeamScore=0
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
      //console.log("response");
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
      } catch (error) {
        console.log("error in future Games")
        console.log(error);
        this.$root.toast("futureGames", error.response.data, "fail");

      }
    }
  }, 
  mounted(){
    console.log("future Games mounted");
    this.futuregames(); 
    this.pastgames(); 
  }
};
</script>

<style></style>
