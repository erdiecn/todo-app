<template>
  <section class="section">
    <div class="container">
      <span>
        <button v-on:click="deactivateList(listId)">X</button>
      </span>
      <h1 class="title">{{ listTitle }}</h1>

      <div class="content">
        <div>
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
<style scoped></style>
