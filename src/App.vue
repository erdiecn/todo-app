<template>
  <div id="app">
    <Dashboard v-if="!this.$store.getters.isLoading" />
    <div v-if="this.$store.getters.isLoading">
      <h1>Loading</h1>
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Dashboard
  },

  created() {
    this.fetchLists();
  },

  methods: {
    ...mapActions(["fetchLists"])
  }
};
</script>

<style>
/* #app {
} */
</style>
