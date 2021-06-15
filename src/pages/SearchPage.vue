<template>
  <div>
    <h1 class="title">Search Page</h1>
    <b-input-group prepend="Search Query:" id="search-input">
      <b-form-input v-model="searchQuery"></b-form-input>
      <b-input-group-append>
        <b-button type="submit" v-on:click="SearchTeam" variant="success">Search</b-button>
      </b-input-group-append>
    </b-input-group>
      <br/>
      Your search Query: {{ searchQuery }}
      <PlayerPreview
      v-for="p in players"
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
  name: "SearchPage",
    components: {
    PlayerPreview
  }, 
 data() {
    return {
      players: [],
      searchQuery:""
    };
  },
    methods: {
    async SearchTeam(){
      //console.log("response");
      try {
        const response = await this.axios.get(
         //`http://localhost:3000/teams/SearchTeamById/${searchQuery}`,
          `http://localhost:3000/teams/SearchTeamById/939`,
        );
        const players = response.data;
        console.log("aaaaaaaaaaaaaaaaaaaaaa");
        console.log(response.data);
        //console.log(games);
        this.players = [];
        this.players.push(...players);
      } catch (error) {
        console.log("error in team players")
        console.log(error);
        this.$root.toast("Team Players", error.response.data, "fail");

      }
    }
  }, 
  mounted(){
    console.log("team players mounted");
    this.SearchTeam(); 
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>