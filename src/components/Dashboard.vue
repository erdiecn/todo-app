<template>
    <div>
        <List 
            v-for="list in lists"
            :key="list.id"
            :listId="list.id"
            :listTitle="list.title"
        />
    </div>
</template>

<script>
import List from "./List";

export default {
  name: "Dashboard",
  props: {
    // title: String
  },
  components: {
    List
  },
  data: () => {
    return {
      lists: [
          {id: 1, title: "Chores1"},
          {id: 2, title: "Chores2"},
          {id: 3, title: "Chores3"},
        // { id: 1, itemText: "Wash the dishes", active: true },
        // { id: 2, itemText: "Pick up toys", active: true },
        // { id: 3, itemText: "Laundry", active: true },
        // { id: 4, itemText: "Walk the dog", active: true }
      ]
    };
  },
  computed: {
    activeItems() {
      return this.listItems.filter(item => {
        return item.active;
      });
    }
  },
  methods: {
    deleteItem(id) {
      this.listItems = this.listItems.map(obj => {
        if (obj.id == id) {
          obj.active = false;
        }
        return obj;
      });
      console.log("Almost deleted", id);
    },
    addItem(itemText){
      const id = this.listItems[this.listItems.length - 1].id + 1;
      const newItem = {itemText, active:true, id}
      this.listItems = [...this.listItems, newItem];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
