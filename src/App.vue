<template>
  <div id="app">
    <div v-if="this.$store.getters.isLoading">
      <div class="pageloader is-active">
        <span class="title">Loading</span>
      </div>
    </div>
    <div class="columns">
      <Sidebar class="sidebar" />
      <router-view class="column is-two-thirds"></router-view>
    </div>
  </div>
</template>

<script>
// import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
// import func from "../vue-temp/vue-editor-bridge";

export default {
  name: "App",
  components: {
    // Dashboard,
    Sidebar
  },

  created() {
    this.getLogin();
    this.getList();
    this.getClassList();
    console.log("state in component", this.$store.state.lists);
  },

  methods: {
    getLogin: function() {
      this.$store.dispatch("login");
    },

    getList: function() {
      this.$store.dispatch("fetchLists");
    },
    getClassList: function() {
      console.log("filter class called");
      this.$store.dispatch("fetchClassLists");
    }
  }
};
</script>

<style>
.sidebar {
  position: static;
}
</style>
