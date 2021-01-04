<template>
  <div>
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
  },

  created() {
    this.getList();
  },

  methods: {
    getList: function() {
      this.list = this.$store.dispatch("fetchOneList", {
        listId: this.$route.params.listId
      }); // need to pass the id dynamicaly
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
