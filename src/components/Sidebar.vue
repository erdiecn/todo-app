<template>
  <div class="body">
    <DateDisplay class="date" />
    <aside class="menu">
      <div class="menu-label" id="completed">
        <font-awesome-icon :icon="['fas', 'check']" class="icon" id="icon-green" />
        <p>Completed</p>
      </div>
      <!-- <div class="menu-label" id="priority">
        <font-awesome-icon :icon="['fas', 'bookmark']" class="icon" id="icon-purple" />
        <p>Priority</p>
      </div>-->
      <div class="menu-label" id="all-lists">
        <font-awesome-icon :icon="['fas', 'list-ul']" class="icon" id="icon-blue" />
        <p>All Lists</p>
      </div>
      <strong class="menu-label" id="lists">
        <font-awesome-icon :icon="['fas', 'list-ul']" class="icon" />
        <p>Class Lists</p>
      </strong>
      <ul class="menu-list">
        <MenuItem
          v-for="list in this.$store.getters.classFilterList"
          :key="`list-${list.id}`"
          :listId="list.id"
          :listTitle="list.title"
        />
      </ul>
      <strong class="menu-label" id="lists">
        <font-awesome-icon :icon="['fas', 'list-ul']" class="icon" />
        <p>My Lists</p>
      </strong>
      <ul class="menu-list">
        <MenuItem
          v-for="list in this.$store.getters.allLists"
          :key="`list-${list.id}`"
          :listId="list.id"
          :listTitle="list.title"
        />
      </ul>
      <router-link to="/sort">
        <button class="button is-primary">
          <font-awesome-icon :icon="['fas', 'filter']" class="icon-button" />
          <p id="button-text">Filter</p>
        </button>
      </router-link>
      <router-link to="/add">
        <button class="button is-primary">
          <font-awesome-icon :icon="['fas', 'plus']" class="icon-button" />
          <p id="button-text">Add List</p>
        </button>
      </router-link>
    </aside>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
import DateDisplay from "../components/DateDisplay";
// import func from "../../vue-temp/vue-editor-bridge";

export default {
  name: "Sidebar",

  data() {
    return {
      checkedLists: [],
      classFilter: []
    };
  },

  components: {
    MenuItem,
    DateDisplay
  },

  mounted() {
    //logs Object {__ob__: Observer}
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
<style scoped>
.body {
  display: flex;

  flex-direction: column;

  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #f5f6f7;

  /* padding-top: 20px; */
  padding-left: 40px;
  width: 25vw;
  color: rgb(51, 63, 72);
  /* margin-top: 50px; */
}
.menu-label {
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgb(51, 63, 72);
  font-size: 14px;
}

.menu-list {
  font-size: 19px;
  padding-bottom: 20px;
}
.button {
  width: 90%;
  align-self: flex-end;
  background-color: rgb(51, 63, 72) !important;
  margin-bottom: 15px;
}

.date {
  height: 75px;
  /* background-color: #fdf8ef; */
  margin-left: -10px;
  width: 20vw;
}

#button-text {
  font-size: 17px;
}

p {
  margin-top: 3px;
}

.icon {
  margin-right: 10px;
}

.icon-button {
  width: 15px;
  margin-right: 7px;
}

#icon-green {
  color: green;
}

#icon-purple {
  color: indigo;
}

#icon-blue {
  color: darkblue;
}
#completed {
  margin-top: 10px;
}

#priority {
  margin-top: -15px;
}

#all-lists {
  margin-top: -15px;
}
</style>
