<template>
  <div>
    <h1>Event Book</h1>
    <Event
      v-for="e in Events"
      :game_id="e.game_id"
      :date="e.date" 
      :event_id="e.event_id" 
      :type="e.type" 
      :minuteOfGame="e.minuteOfGame" 
      :player_id="e.player_id"
      :description="e.description"
      :key="e.game_id"></Event>
  </div>
</template>

<script>
import Event from "../components/Event.vue"
export default {
  name: "EventPage",
  components: {
    Event
  }, 
  data() {
    return {
      Events: [],
    };
  },
  methods: {
    fillEvents(events){
      console.log("AAAAAAAAAAAAAAAAAAAAAA");
      console.log(events);
      this.Events = [];
      this.Events.push(...events);

    }
  }, 
  mounted(){
    this.fillEvents(this.$route.params.events);
  }
};
</script>

<style>

</style>