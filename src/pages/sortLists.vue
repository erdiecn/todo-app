<template>
  <div>
    <section class="hero">
      <div id="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <h1 class="title">All Items</h1>
            </div>
            <div>
              <button
                type="checkbox"
                class="button is-primary"
                id="modal-button"
                @click="showModal"
              >Add a New Todo Item!</button>
              <button class="button is-small" v-on:click="deactivateList(listId)">Delete List</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- I just need it to get one list based off the above list id -->
    <List
      v-for="list in this.$store.getters.filterLists"
      :key="`list-${list.id}`"
      :listId="list.id"
      :listTitle="list.title"
      :listItems="list.items"
      v-on:delete-list="deleteList(list.id)"
    />
    <!-- This adds a new todo list -->
    <!-- <div class="container" v-for="list in this.$store.getters.allLists" :key="list.id"></div> -->
  </div>
</template>
<script>
import List from "../components/List";
// import AddList from "../components/AddList";

export default {
  name: "SortLists",
  props: {
    itemId: Number
  },

  components: {
    List
  }

  // created() {
  //   this.getList();
  // },

  // methods: {
  //   getList: function() {
  //     this.list = this.$store.dispatch("fetchOneList", {
  //       listId: this.$route.params.listId
  //     }); // need to pass the id dynamicaly
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";

.body {
  height: 100vh;
  /* overflow-y: auto;
  overflow-x: hidden; */
  color: black;
}
#loading {
  height: 100vh !important;
  text-align: center;
  /* background-color: brown; */
  /* color: chartreuse; */
}

img {
  width: 200px;
  margin: 20px;
}

.hero {
  margin-top: 70px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(7, 7, 7, 0.1);
  /* background-color: blue; */
}

#hero-body {
  height: 40px;
}

h1 {
  font-size: 30px;
  border-bottom: 1px;
  /* color: $primary !important; */
}

#list-all {
  margin-left: 25px;
  margin-top: 20px;
}

.date {
  height: 150px;
  /* background-color: #fdf8ef; */
  margin-left: -10px;
}
</style>
