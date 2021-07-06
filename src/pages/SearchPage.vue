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
      <TeamPreview
      v-for="t in team_details"
      :team_name="t.team_name"
      :team_logo="t.team_logo" 
      :key="t.team_id"></TeamPreview>
      <br>
      Players:<br>
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
      searchQuery:""
    };
  },
    methods: {
    async Search(search){
      //console.log("response");
      try {

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
        

      } catch (error) {
        console.log("error in team players");
        //this.$root.toast("Team Players", error.response.data, "fail");
        this.$root.toast("No Result Found", "We are sorry, we did not found anything for " + `${search}`, "fail");

      }
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