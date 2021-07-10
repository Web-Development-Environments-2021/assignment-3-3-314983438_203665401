<template>
  <div class="container">
    <h1 class="title">Add Game</h1>
    <b-form @submit.prevent="onAddingGame" @reset.prevent="onReset">

      <b-form-group
        id="input-group-homeTeamName"
        label-cols-sm="3"
        label="Home Team Name:"
        label-for="homeTeamName"
      >
        <b-form-input
          id="homeTeamName"
          v-model="$v.form.homeTeamName.$model"
          type="text"
          :state="validateState('homeTeamName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.homeTeamName.required">
          Home team name is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-homeTeamId"
        label-cols-sm="3"
        label="Home Team ID:"
        label-for="homeTeamId"
      >
        <b-form-input
          id="homeTeamId"
          v-model="$v.form.homeTeamId.$model"
          type="text"
          :state="validateState('homeTeamId')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.homeTeamId.required">
          Home Team ID is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-awayTeamName"
        label-cols-sm="3"
        label="Away Team Name:"
        label-for="awayTeamName"
      >
        <b-form-input
          id="awayTeamName"
          v-model="$v.form.awayTeamName.$model"
          type="text"
          :state="validateState('awayTeamName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.awayTeamName.required">
          Away team name is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-awayTeamId"
        label-cols-sm="3"
        label="Away Team ID:"
        label-for="awayTeamId"
      >
        <b-form-input
          id="awayTeamId"
          v-model="$v.form.awayTeamId.$model"
          type="text"
          :state="validateState('awayTeamId')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.awayTeamId.required">
          Away Team ID is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-date"
        label-cols-sm="3"
        label="Date:"
        label-for="date"
      >
        <b-form-input 
          id="date"
          type="text"
          v-model="$v.form.date.$model"
          :state="validateState('date')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Date is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-time"
        label-cols-sm="3"
        label="Time:"
        label-for="time"
      >
        <b-form-input
          id="time"
          type="text"
          v-model="$v.form.time.$model"
          :state="validateState('time')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Time is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-stadium"
        label-cols-sm="3"
        label="Stadium:"
        label-for="stadium"
      >

        <b-form-input
          id="stadium"
          v-model="$v.form.stadium.$model"
          type="text"
          :state="validateState('stadium')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.stadium.required">
          Stadium is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.stadium.alpha">
          Stadium must be only letters
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Add</b-button
      >
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Action failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import {
  required,
  alpha,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "ManagmentPage",
  data() {
    return {
      form: {
        homeTeamName: "",
        homeTeamId: "",
        awayTeamName: "",
        awayTeamId: "",
        date: "",
        time: "",
        stadium: "",
        submitError: undefined
      },
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      homeTeamName: {
        required
      },
      homeTeamId: {
        required,
        numeric
      },
      awayTeamName: {
        required
      },
      awayTeamId: {
        required,
        numeric
      },
      date: {
        required
      },
      time: {
          required
      },
      stadium: {
        required
      }
    }
  },
  mounted() {
    // console.log("mounted");
    // this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async addGame() {
      try {
        let momentDate = new Date(this.form.date + " " + this.form.time);
        console.log(momentDate);
        const response = await this.axios.post(
          "http://localhost:3000/admin/AddGame",
          {
        homeTeamName: this.form.homeTeamName,
        homeTeamId: this.form.homeTeamId,
        awayTeamName: this.form.awayTeamName,
        awayTeamId: this.form.awayTeamId,
        date: momentDate,
        stadium: this.stadium,
          }
        );
        // this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.message;
        this.$root.toast("Adding", err.response.data, "failed");
      }
    },
    onAddingGame() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.addGame();
    },
    onReset() {
      this.form = {
        homeTeamName: "",
        homeTeamId: "",
        awayTeamName: "",
        awayTeamId: "",
        date: "",
        time: "",
        stadium: "",
        submitError: undefined
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 600px;
}
</style>
