<template>
  <div>
    <GamePreview
      v-for="g in games"
      :game_id="g[0].game_id" 
      :date="g[0].date" 
      :homeTeamId="g[0].homeTeamId" 
      :awayTeamId="g[0].awayTeamId" 
      :stadium="g[0].stadium" 
      :referee="g[0].referee" 
      :homeTeamScore="g[0].homeTeamScore" 
      :awayTeamScore="g[0].awayTeamScore" 
      :key="g.game_id"></GamePreview>
  </div>
</template>

<script>
import GamePreview from "./GamePreview.vue";
export default {
  name: "FavoriteGames",
  components: {
    GamePreview
  }, 
  data() {
    return {
      games: [],
      message: ""
        // {
        //   id:25,
        //   hostTeam: "Maccabi Tel-Aviv",
        //   guestTeam: "Hapoel Beer-Sheva",
        //   date: "27/5/21",
        //   hour: "20:00"
        // },
        // {
        //   id:39,
        //   hostTeam: "Hapoel Tel-Aviv",
        //   guestTeam: "Maccabi Haifa",
        //   date: "29/5/21",
        //   hour: "20:00"
        // }
     // ]
    };
  },
  methods: {
    async updateGames(){
      //console.log("response");
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteGames",
        );
        const games = response.data;
        console.log("aaaaaaaaaaaaaaaaaaaaaa");
        console.log(response.data);
        //console.log(games);
        this.games = [];
        this.games.push(...games);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
        this.$root.toast("Login", error.response.data, "fail");

      }
    }
  }, 
  mounted(){
    console.log("favorite games mounted");
    this.updateGames(); 
  }
};
</script>

<style></style>
