<template>
  <div id="app">
    <div class="columns">
      <Sidebar class="sidebar" v-if="!this.$store.getters.isLoading" />
      <router-view class="column is-two-thirds" v-if="!this.$store.getters.isLoading">
        <div v-if="this.$store.getters.isLoading">
          <div class="pageloader is-active">
            <span class="title">Loading</span>
          </div>
        </div>
      </router-view>
    </div>
  </div>
</template>

<script>
// import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    // Dashboard,
    Sidebar
  },

  created() {
    this.getLogin();
    this.getList();
  },

  methods: {
    getLogin: function() {
      console.log("login called");
      this.$store.dispatch("login");
    },

    getList: function() {
      this.$store.dispatch("fetchLists");
    }
  }
};
</script>

<style>
.sidebar {
  position: static;
}
</style>
