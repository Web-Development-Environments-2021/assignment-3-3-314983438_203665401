<template>
  <table>
  <tbody>
    <tr>
      <td>Type:</td>
      <td>{{type}}</td>
     </tr>
    <tr>
      <td>Player:</td>
      <td>{{player_id}}</td>
      </tr>
    <tr>
      <td>Minute In The Game:</td>
      <td>{{minuteOfGame}}</td>
      </tr>
     <tr>
      <td> Event Description:</td>
      <td>{{description}}</td>
    </tr>      
  </tbody>
</table>
</template>

<script>
export default {
  name: "Event",
  props: {
      event_id: {
        type: Number,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      minuteOfGame: {
        type: Number,
        required: true
      },
      game_id: {
        type: Number,
        required: true
      },
      player_id: {
        type: Number,
        required: true
      },
      description: {
        type: String
      }
  }
}
</script>

<style>
</style>