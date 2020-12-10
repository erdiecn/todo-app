<template>
  <section class="section">
    <div class="container">
      <div class="container-head">
        <h1 class="title">{{ listTitle }}</h1>
        <button class="button is-small" v-on:click="deactivateList(listId)">Delete List</button>
      </div>
      <div class="content">
        <div class="list">
          <ListItem
            v-for="item in listItems"
            :key="item.id"
            :itemText="item.text"
            :itemId="item.id"
            :itemComplete="Boolean(Number(item.complete))"
          />
        </div>
        <div>
          <AddListItem :listId="listId" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ListItem from "./ListItem";
import AddListItem from "./AddListItem";

export default {
  name: "List",
  props: {
    listId: Number,
    listTitle: String,
    listItems: Array
  },

  components: {
    ListItem,
    AddListItem
  },

  methods: {
    deactivateList: function(listId) {
      this.$store.dispatch("deleteList", listId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  border: none;
  background: none;
  margin-top: -25px;
  margin-left: auto;
}
</style>
