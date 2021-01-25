<template>
  <div>
    <div class="container">
      <div class="container-head">
        <h1 class="list-title">
          <strong>{{ listTitle }}</strong>
        </h1>
        <button class="button is-small" id="delete-button" v-on:click="deactivateList(listId)">
          <font-awesome-icon id="icon" :icon="['fas', 'trash']" />
        </button>
      </div>
      <div class="content">
        <div>
          <ListItem
            v-for="item in listItems"
            :key="`item-${item.id}`"
            :itemId="item.id"
            :itemText="item.text"
            :itemDueDate="item.due_date"
            :itemComplete="Boolean(Number(item.complete))"
          />
        </div>
        <div>
          <!-- <AddListItem :listId="listId" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
// import AddListItem from "./AddListItem";

export default {
  name: "List",
  props: {
    listId: Number,
    listTitle: String,
    listItems: Array
  },

  components: {
    ListItem
    // AddListItem
  },

  methods: {
    deactivateList: function(listId) {
      this.$store.dispatch("deleteList", listId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
.container {
  padding-left: 20px;
}
.container-head {
  border-bottom: 1px solid rgba(7, 7, 7, 0.1);
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
}

#delete-button {
  padding-top: 40px;
  /* color: $primary; */
}

.button {
  border: none;
  background: none;
  margin-top: -25px;
  margin-left: auto;
}

.list-title {
  font-size: 20px;
}
</style>
