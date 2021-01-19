<template>
  <div class="body">
    <div v-if="this.$store.getters.allLists == null">
      <section id="loading">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Oh no, you don't have any lists yet!</h1>
            <img src="../assets/undraw_Up_to_date_re_nqid.svg" />
            <h2 class="subtitle">Add your first list here or click the add list button</h2>
            <AddList />
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <!-- <List
        v-for="list in this.$store.getters.allLists"
        :key="`list-${list.id}`"
        :listId="list.id"
        :listTitle="list.title"
        :listItems="list.items"
        v-on:delete-list="deleteList(list.id)"
      />-->
      <!-- :listItems="list.items"  -->
      <section class="hero">
        <div id="hero-body">
          <div class="container">
            <h1 class="title">All Items</h1>
          </div>
        </div>
      </section>
      <div
        class="container"
        id="list-all"
        v-for="list in this.$store.getters.allLists"
        :key="list.id"
      >
        <ListItemWholeview
          v-for="item in list.items"
          :key="`item-${item.id}`"
          :itemId="item.id"
          :itemText="item.text"
          :itemDueDate="item.due_date"
          :itemComplete="Boolean(Number(item.complete))"
          :listTitle="list.title"
        />
      </div>
      <button
        type="checkbox"
        class="button is-bold is-primary"
        id="modal-button"
        @click="showModal"
      >Add a New Todo Item!</button>
      <div>
        <AddListItem v-show="isModalVisible" @close="closeModal" :listId="listId" />
      </div>
    </div>
  </div>
</template>

<script>
// import List from "../components/List";
import AddList from "../components/AddList";
import AddListItem from "../components/AddListItem";
import ListItemWholeview from "../components/ListItemWholeview";

export default {
  name: "Dashboard",

  components: {
    AddList,
    ListItemWholeview,
    AddListItem

    // ListItemWholeview
    // DateDisplay
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      var x = document.getElementById("modal-button");
      x.style.display = "none";
    },
    closeModal() {
      this.isModalVisible = false;
      var x = document.getElementById("modal-button");
      x.style.display = "block";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";

.body {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
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
