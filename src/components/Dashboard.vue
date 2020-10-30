<template>
  <div>
    <AddList v-on:addNewList="addList" />
    <List
      v-for="list in activeLists"
      :key="list.id"
      :listId="list.id"
      :listTitle="list.title"
      :listItems="list.items"
      v-on:delete-list="deleteList(list.id)"
    />
    <div class="container" v-for="list in activeLists" :key="list.id">
      <ListItemWholeview
        v-for="item in list.items"
        :key="item.id"
        :listId="item.id"
        :itemText="item.text"
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
import { mapGetters } from "vuex";

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
    ...mapGetters(["allLists"]),

    activeLists() {
      if (!this.$store.getters.isLoading) {
        return this.$store.getters.allLists.filter(list => {
          console.log(list.active);
          return list.active;
        });
      } else {
        return [];
      }
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
