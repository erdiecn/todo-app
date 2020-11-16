<template>
  <div id="app">
    <Sidebar />
    <Dashboard v-if="!this.$store.getters.isLoading" />
    <div v-if="this.$store.getters.isLoading">
      <h1>Loading</h1>
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Dashboard,
    Sidebar
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
