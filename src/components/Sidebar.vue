<template>
  <div class="body">
    <aside class="menu">
      <p class="menu-label">Sort Lists by Clicking on the List Name</p>
      <ul class="menu-list">
        <MenuItem
          v-for="list in this.$store.getters.allLists"
          :key="`list-${list.id}`"
          :listId="list.id"
          :listTitle="list.title"
        />
      </ul>
      <router-link to="/sort">
        <button class="button is-primary" v-on:click="filterLists()">Filter</button>
      </router-link>
    </aside>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
  name: "Sidebar",

  data() {
    return {
      checkedLists: []
    };
  },

  components: {
    MenuItem
  },

  mounted() {
    console.log("state in component", this.$store.state.lists); //logs Object {__ob__: Observer}
  },

  methods: {
    filterLists: function() {
      this.$store.dispatch("filterLists");
      console.log("filter clicked");
    },
    getList: function() {
      this.$store.dispatch("fetchLists");
    }

    // clickclick: function(e) {
    //   console.log(e, "event");
    //   // event.preventDefault();
    //   // const listId = this.listId;
    //   // const listTitle = this.listTitle;
    //   // this.checkedLists.push({ listId, listTitle });
    //   // console.log(listId, listTitle, "first");
    //   console.log(this.checkedLists);
    // }
    // getAList: function(listId) {
    //   this.$store.dispatch("fetchOneList");
    //   console.log(listId, this.listTitle);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.body {
  display: flex;

  flex-direction: column;

  height: 100vh;

  background-color: rgb(51, 63, 72);
  background-color: linear-gradient(
    90deg,
    rgba(51, 63, 72, 1) 0%,
    rgba(7, 71, 84, 1) 94%
  );
  padding-top: 20px;
  padding-left: 40px;
  width: 25vw;
  color: lightgrey;
}
.menu-label {
  color: lightgrey;
  font-size: 16px;
}

.menu-list {
  font-size: 19px;
  padding-bottom: 20px;
}
.button {
  width: 90%;
  align-self: flex-end;
}
</style>
