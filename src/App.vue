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

export default {
  name: "App",
  components: {
    Dashboard
  },

  created() {
    this.getList();
  },

  methods: {
    getList: function() {
      this.$store.dispatch("fetchLists");
    }
  }
};
</script>

<style>
/* #app {
} */
</style>
