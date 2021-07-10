<template>
    <div class="league-preview">
      <b-card
      img-alt="Image"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title>{{this.leaguename}}</b-card-title>
      <b-card-text>
        Season name: {{ this.current_season_name }}
        <br/>
        <!-- Stage name: {{ this.current_stage_name }}
        <br/> -->
        Next Game Date: {{ this.next_game_date }}
        <br/>
        Next Game home team: {{ this.next_game_hometeam }}
        <br/>
        Next Game away team: {{ this.next_game_awayteam }}
        <br/>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
 data() {
    return {
      leaguename: "",
      current_season_name: "",
      // current_stage_name:"",
      next_game_date: "",
      next_game_hometeam: "",
      next_game_awayteam: "",
      query: "",
    };
  },
    methods: {
    async LeagueDetails(){
      try {
        const response = await this.axios.get(
          `http://localhost:3000/league/getDetails`,
        );
        this.leaguename = response.data.league_name;
        this.current_season_name = response.data.current_season_name;
        // this.current_stage_name = response.data.current_stage_name;
        this.next_game_date = response.data.next_game_date;
        this.next_game_hometeam = response.data.next_game_hometeam;
        this.next_game_awayteam = response.data.next_game_homeaway;
        console.log(response.data);
      } catch (error) {
        console.log("error in league details")
        console.log(error);
        // this.$root.toast("league details", error.response.data, "fail");

      }
    }
  }, 
  mounted(){
    console.log("league details mounted");
    this.LeagueDetails(); 
  }
}
</script>

<style>
.league-preview {
  display: inline-block;
  width: 350px;
  height: 250px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(44, 89, 116);
}

.league-preview .league-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 155, 197);
}

.league-preview .league-content {
  width: 100%;
  overflow: hidden;
}

</style>