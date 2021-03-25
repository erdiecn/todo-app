<template>
  <div class="body">
    <div v-if="this.$store.getters.allLists == null">
      <section id="loading">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Oh no, you don't have any lists yet!</h1>
            <img src="../assets/undraw_Up_to_date_re_nqid.svg" />
            <h2 class="subtitle">Add your first list here or click the add list button</h2>
            <!-- <label>List Title</label> -->
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
            <div class="columns">
              <div class="column">
                <h1>All Tasks</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <AddListItem v-show="isModalVisible" @close="closeModal" :listId="listId" />
      </div>
      <span>
        <button
          type="inputs"
          class="button is-primary is-small"
          id="modal-button"
          @click="showModal"
        > Add Item
          <!-- <font-awesome-icon id="icon" :icon="['fas', 'plus']" /> -->
        </button>
      </span>
      <div v-show="showSuccess" class="notification is-success is-light" id="success">
        <button class="delete" @click="closeButton"></button>
        <strong> Form Completed </strong>
        <br>
        You have added a new item.
      </div>
      <div v-show="showDelete" class="notification is-danger is-light" id="delete">
        <button class="delete" @click="closeButton" ></button>
        <strong> You deleted an item </strong>
        <br>
        You will no longer see this item in the list
      </div>
      <div
        class="container"
        id="list-all"
        v-for="list in this.$store.getters.allLists"
        :key="list.id"
      >
        <ListItemWholeview
          @delete="openDelete"
          v-for="item in list.items"
          :key="`item-${item.id}`"
          :itemId="item.id"
          :itemText="item.text"
          :itemDueDate="item.due_date"
          :itemComplete="Boolean(Number(item.complete))"
          :listTitle="list.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddList from "../components/AddList";
import AddListItem from "../components/AddListItem";
import ListItemWholeview from "../components/ListItemWholeview";

export default {
  name: "Dashboard",

  components: {
    AddList,
    ListItemWholeview,
    AddListItem,
  },
  data() {
    return {
      isModalVisible: false,
      listId: [],
      showSuccess: false,
      showDelete: false,
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
      this.showSuccess = true;
    },
    openDelete() {
      this.showDelete = true;
    },
    closeButton() {
      this.showSuccess = false;
      this.showDelete = false;
    }
  
  },
  computed: {
    sortedList(){
      const allLists = this.$store.getters.allLists;
      allLists.forEach(e => {
        e.items = e.items.sort((a,b) => {
          return a.due_date < b.due_date
        })
      });
      return allLists;
    }
  }
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
  font-size: 28px;
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

#modal-button {
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  float: right;
  height: 30px;
  width: 95px;
  margin-top: -40px;
  background-color: #245791;
}

.notification{
  margin-left: 15px;
}
</style>
