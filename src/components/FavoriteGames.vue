<template>
  <div>
    <GamePreview
      v-for="g in games"
      :game_id="g.game_id" 
      :date="g.date" 
      :homeTeamId="g.homeTeamId" 
      :awayTeamId="g.awayTeamId" 
      :stadium="g.stadium" 
      :referee="g.referee" 
      :homeTeamScore="g.homeTeamScore" 
      :awayTeamScore="g.awayTeamScore" 
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
      // message: ""
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
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteGames",
        );
        this.axios.defaults.withCredentials = false;
        const games = response.data;
        console.log("aaaaaaaaaaaaaaaaaaaaaa");
        console.log(response.data);
        //console.log(games);
        this.games = [];
        this.games.push(...games);
      } catch (error) {
        console.log("error in update games")
        console.log(error);
        this.$root.toast("favoriteGames", error.response.data, "fail");

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
