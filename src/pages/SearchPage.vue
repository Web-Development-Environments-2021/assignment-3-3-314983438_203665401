<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button type="submit" v-on:click="Search(searchQuery)" variant="success">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      <!-- Your search Query: {{ searchQuery }} -->
      Teams:<br>
              <b-button type="submit" v-on:click="SortTeamAZ()" variant="success">Sort Team A-Z</b-button>
              <b-button type="submit" v-on:click="SortTeamZA()" variant="success">Sort Team Z-A</b-button>
        <br>
      <TeamPreview
      v-for="t in team_details"
      :team_name="t.team_name"
      :team_logo="t.team_logo" 
      :key="t.team_id"></TeamPreview>
      <br>
      Players:<br>
      <b-button type="submit" v-on:click="SortPlayersAZ()" variant="success">Sort Player A-Z</b-button>
      <b-button type="submit" v-on:click="SortPlayersZA()" variant="success">Sort Player Z-A</b-button>
      <b-button type="submit" v-on:click="SortPlayersByTeamAZ()" variant="success">Sort Player By Team Name A-Z</b-button>
      <b-button type="submit" v-on:click="SortPlayersByTeamZA()" variant="success">Sort Player By Team Name Z-A</b-button>
      <br>Filter Players By Position:
      <b-form-select v-model="selected" v-on:change="FilterPlayersByPosition">
        <option value="null">Filter By Position</option>
        <option v-for="p in playersPositions" :key="p">{{p}}</option>
      </b-form-select>

      <br>Filter Players By Team Name:
      <b-form-select v-model="selected1" v-on:change="FilterPlayersByTeamName">
        <option value="null">Filter By Team Name</option>
        <option v-for="p in playersTeamNames" :key="p">{{p}}</option>
      </b-form-select>
    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->

               <br>
      <PlayerPreview
      v-for="p in player_details"
      :player_id="p.id"
      :name="p.fullname" 
      :image="p.image_url" 
      :position="p.position" 
      :src="p.image_url"
      :team_name="p.teamName" 
      :key="p.id"></PlayerPreview>
  </div>
</template>

<script>
import PlayerPreview from "../components/PlayerPreview.vue";
import TeamPreview from "../components/TeamPreview.vue";
export default {
  name: "SearchPage",
    components: {
    PlayerPreview,
    TeamPreview
  }, 
 data() {
    return {
      team_details: [],
      player_details: [],
      player_details_fixed: [],
      playersPositions: [],
      playersTeamNames: [],
      searchQuery:""
    };
  },
    methods: {
    async Search(search){
      //console.log("response");
      try {
        this.team_details = [];
        this.player_details = [];
        this.player_details_fixed = [];
        /* searching team details */
        const team_id = await this.axios.get(
         `http://localhost:3000/teams/SearchTeamByName/${search}`,
        );
        this.team_details = team_id.data;

        /* searching player details */
        const player = await this.axios.get(
        `http://localhost:3000/players/searchplayerbyname/${search}`,
        );
        console.log(player.data);
        this.player_details = player.data;
        this.player_details_fixed = player.data;

        /* array of all players positions, for filter */
        this.playersPositions = [];
        for (let i = 0; i < this.player_details.length; i++) {
          if (!(this.playersPositions.includes(this.player_details[i].position))){
            this.playersPositions.push(this.player_details[i].position)
          };
        };

        /* array of all players Team Names, for filter */
        this.playersTeamNames = [];
        for (let i = 0; i < this.player_details.length; i++) {
          if (!(this.playersTeamNames.includes(this.player_details[i].teamName))){
            this.playersTeamNames.push(this.player_details[i].teamName)
          };
        };

      } catch (error) {
        console.log("error in team players");
        //this.$root.toast("Team Players", error.response.data, "fail");
        if (this.player_details_fixed.length == 0 && this.team_details.length == 0)
          this.$root.toast("No Result Found", "We are sorry, we did not found anything for " + `${search}`, "fail");

      }
    },
    
        async SortTeamAZ(){

          this.team_details.sort(function(a, b){
            if(a.team_name < b.team_name) { return -1; }
            if(a.team_name > b.team_name) { return 1; }
            return 0;
          });
          console.log(this.team_details);

    },
        async SortTeamZA(){

            this.team_details.sort(function(a, b){
            if(a.team_name < b.team_name) { return 1; }
            if(a.team_name > b.team_name) { return -1; }
            return 0;
          });
          console.log(this.team_details);
    },
    async SortPlayersAZ(){

          this.player_details.sort(function(a, b){
            if(a.fullname < b.fullname) { return -1; }
            if(a.fullname > b.fullname) { return 1; }
            return 0;
          });
          console.log(this.player_details);

    },
        async SortPlayersZA(){

            this.player_details.sort(function(a, b){
            if(a.fullname < b.fullname) { return 1; }
            if(a.fullname > b.fullname) { return -1; }
            return 0;
          });
          console.log(this.player_details);
    },
        async SortPlayersByTeamAZ(){

          this.player_details.sort(function(a, b){
            if(a.teamName < b.teamName) { return -1; }
            if(a.teamName > b.teamName) { return 1; }
            return 0;
          });
          console.log(this.player_details);

    },
        async SortPlayersByTeamZA(){

            this.player_details.sort(function(a, b){
            if(a.teamName < b.teamName) { return 1; }
            if(a.teamName > b.teamName) { return -1; }
            return 0;
          });
          console.log(this.player_details);
    },
        async FilterPlayersByPosition(){
            if (this.selected == "null")
                this.player_details = this.player_details_fixed;
            else {
              this.player_details = this.player_details_fixed;
              this.player_details = this.player_details.filter(p => p.position == this.selected);
            };

        /* array of all players Team Names, for filter */
        this.playersTeamNames = [];
        for (let i = 0; i < this.player_details.length; i++) {
          if (!(this.playersTeamNames.includes(this.player_details[i].teamName))){
            this.playersTeamNames.push(this.player_details[i].teamName)
          };
        };
    },
        async FilterPlayersByTeamName(){
            if (this.selected1 == "null")
                this.player_details = this.player_details_fixed;
            else {
              this.player_details = this.player_details_fixed;
              this.player_details = this.player_details.filter(p => p.teamName == this.selected1);
            };

        /* array of all players positions, for filter */
        this.playersPositions = [];
        for (let i = 0; i < this.player_details.length; i++) {
          if (!(this.playersPositions.includes(this.player_details[i].position))){
            this.playersPositions.push(this.player_details[i].position)
          };
        };

    }
  }, 
  mounted(){
    console.log("team players mounted");
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>