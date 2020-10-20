<template>
  <div>
    <AddList v-on:addNewList="addList" />
    <List v-for="list in activeLists"
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
    ListItemWholeview,
  },
  data: () => {
    return {
      lists: [
        {
          id: 1,
          title: "Chores1",
          active: true,
          listItems: [
            { id: 11, itemText: "Wash the dishes", active: true },
            { id: 21, itemText: "Pick up toys", active: true },
            { id: 31, itemText: "Laundry", active: true },
            { id: 41, itemText: "Walk the dog", active: true },
          ],
        },
        {
          id: 2,
          title: "Chores2",
          active: true,
          listItems: [
            { id: 12, itemText: "Wash the dishes", active: true },
            { id: 22, itemText: "Pick up toys", active: true },
            { id: 32, itemText: "Laundry", active: true },
            { id: 42, itemText: "Walk the dog", active: true },
          ],
        },
        {
          id: 3,
          title: "Chores3",
          active: true,
          listItems: [
            { id: 13, itemText: "Wash the dishes", active: true },
            { id: 23, itemText: "Pick up toys", active: true },
            { id: 33, itemText: "Laundry", active: true },
            { id: 43, itemText: "Walk the dog", active: true },
          ],
        },
      ],
    };
  },
  computed: {
    activeLists() {
      return this.lists.filter((list) => {
        return list.active;
      });
    },
  },
  methods: {
    deleteList(id) {
      this.lists = this.lists.map((obj) => {
        if (obj.id == id) {
          obj.active = false;
        }
        return obj;
      });
      console.log("Almost deleted", id);
    },
    addList(listTitle) {
      const id =
        this.lists.length !== 0 ? this.lists[this.lists.length - 1].id + 1 : 0;
      const newList = { title: listTitle, active: true, id };
      this.lists = [...this.lists, newList];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
