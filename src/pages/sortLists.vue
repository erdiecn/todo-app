<template>
  <div class="body">
    <section class="hero">
      <div id="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column"></div>
            <div>
              <button
                type="checkbox"
                class="button is-primary is-small"
                id="modal-button"
                @click="showModal"
              >Add a New Task</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <AddListItem v-show="isModalVisible" @close="closeModal" :listId="listId" />
    </div>

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
import AddListItem from "../components/AddListItem";

export default {
  name: "SortLists",
  props: {
    itemId: Number
  },

  data() {
    return {
      isModalVisible: false
    };
  },

  components: {
    List,
    AddListItem
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
  /* border-bottom: 1px solid rgba(7, 7, 7, 0.1); */
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
