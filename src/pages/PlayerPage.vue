<template>
  <div>
    <!-- <h1 class="title">Search Page</h1>
      <br/>
      Your search Query: {{ searchQuery }} -->
      <PlayerFullPage
      :name="this.name" 
      :image="this.image" 
      :common_name="this.common_name"
      :position="this.position"
      :team="this.team"
      :nationality="this.nationality" 
      :birthdate="this.birthdate"
      :birthcountry="this.birthcountry" 
      :height="this.height" 
      :weight="this.weight" 
      ></PlayerFullPage>
  </div>
</template>

<script>
import PlayerFullPage from "../components/PlayerFullPage.vue";
export default {
  name: "PlayerPage",
    components: {
    PlayerFullPage
  }, 
 data() {
    return {
        name: "",
        image: "",
        common_name: "",
        position: "",
        team: "",
        nationality: "",
        birthdate: "",
        birthcountry: "",
        height : "",
        weight: ""
    };
  },
    methods: {
    async SearchPlayer(player_id){
      try {
        const response = await this.axios.get(
         `http://localhost:3000/players/SearchPlayerById/${player_id}`,
        );
        this.name = response.data[0].fullname;
        this.image = response.data[0].image_url;
        this.common_name = response.data[0].common_name;
        this.position = response.data[0].position;
        this.team = response.data[0].team;
        this.nationality = response.data[0].nationality;
        this.birthdate = response.data[0].birthdate;
        this.birthcountry = response.data[0].birthcountry;
        this.height = response.data[0].height;
        this.weight = response.data[0].weight;
      } catch (error) {
        console.log("error in team players")
        // console.log(error);
        // this.$root.toast("Team Players", error.response.data, "fail");

      }
    }
  }, 
  mounted(){
    console.log("team players mounted");
    this.SearchPlayer(this.$route.params.player_id); 
  }
}
</script>

<style scoped>

#search-input {
  margin-left: 20px; 
  width: 500px; 
}
</style>