<template>
  <div>
    <AddList v-on:addNewList="addList" />
    <List
      v-for="list in activeLists"
      :key="list.id"
      :listId="list.id"
      :listTitle="list.title"
      :listItems="list.listItems"
      v-on:delete-list="deleteList(list.id)"
    />
    <div class="container" v-for="list in activeLists" :key="list.id">
      <ListItemWholeview
        v-for="item in list.listItems"
        :key="item.id"
        :listId="item.id"
        :itemText="item.itemText"
        :listTitle="list.title"
      />
    </div>
    <AddList v-on:addNewList="addList" />
  </div>
</template>

<script>
import List from "./List";
import AddList from "./AddList";
import ListItemWholeview from "./ListItemWholeview";

export default {
  name: "Dashboard",
  props: {
    // title: String
  },
  components: {
    List,
    AddList,
    ListItemWholeview
  },
  computed: {
    activeLists() {
      console.log(this.$store.getters.lists);
      console.log(this.$store);

      return this.$store.getters.lists.filter(list => {
        return list.active;
      });
    }
  },
  methods: {
    deleteList(id) {
      this.$store.getters.lists = this.$store.getters.lists.map(obj => {
        if (obj.id == id) {
          obj.active = false;
        }
        return obj;
      });
      console.log("Almost deleted", id);
    },
    addList(listTitle) {
      this.$store.commit("addList", listTitle);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
