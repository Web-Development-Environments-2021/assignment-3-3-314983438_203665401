<template>
  <div class="game-preview">
    <div class="game-title">
      <b>Game Id:</b> {{ game_id }}
    </div>
    <ul class="game-content">
      <li> Date: {{ date }}</li>
      <!-- <li> Home Team: {{ homeTeamName }}</li>
      <li> Away Team: {{ awayTeamName }}</li> -->
      <li> Home Team Name: 
        <router-link type="submit" :to="{ name: 'TeamPage' ,params: {team_name: `${homeTeamName}`}}" href="#" variant="primary">{{ homeTeamName }}</router-link>
      </li>
      <li> Away Team Name: 
            <router-link type="submit" :to="{ name: 'TeamPage' ,params: {team_name: `${awayTeamName}`}}" href="#" variant="primary">{{ awayTeamName }}</router-link>
      </li>
      <li> Stadium: {{ stadium }}</li>
      <li v-if="referee"> Referee: {{ referee }}</li>
      <li v-if="homeTeamScore >= 0 && awayTeamScore >= 0"> Result {{ homeTeamScore }} - {{ awayTeamScore }}</li>
      <li v-if="events">
        <router-link type="submit" :to="{ name: 'EventsPage' ,params: {events: `${events}`}}" href="#" variant="primary">Event Book</router-link>
      </li>
    </ul>
    <b-button v-if="$root.store.username && showButton" v-on:click="addToFavorites()" type="submit" class="button" variant="primary">Add To Favorites</b-button>
    <!-- <b-list-group v-if="events">
      <h4>Event Book</h4>
        <b-list-group-item variant="secondary" v-for="e in events" :key="e.eventId">
          <h5>{{e.type}}</h5>
          <p>Minute: {{e.minuteOfGame}}<br>
            Player: {{e.player_id}}<br>
            Description: {{e.description}}</p>
        </b-list-group-item>
    </b-list-group> -->

  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      game_id: {
        type: Number,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      homeTeamName: {
        type: String,
        required: true
      },
      awayTeamName: {
        type: String,
        required: true
      },
      stadium: {
        type: String,
        required: true
      },
      referee: {
        type: String,
        // required: true
      },
      homeTeamScore: {
        type: Number,
        // required: true
      },
      awayTeamScore: {
        type: Number,
        // required: true
      },
      events: {
        type: Array
      },
      showButton: {
        type: Boolean,
        required: true
      }
  }, 
  methods: {
    async addToFavorites(){
        // console.log("mohahahahaha");
        // console.log(localStorage.username);
        // console.log(this.game_id);
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post(
          "http://localhost:3000/users/favoriteGames",
          {
            game_id: this.game_id
          }
        );
        this.axios.defaults.withCredentials = false;
        this.$root.toast("favoriteGames", response.data, "success");
      } catch (error) {
        console.log("error in adding to favorite games")
        console.log(error);
        this.$root.toast("favoriteGames", error.response.data, "fail");

      }
    }
  },
  mounted(){
    console.log("game preview mounted");
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 300px;
  height: 220px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}

.game-preview .button {
  display:table;
  margin: 0 auto;
}

</style>
