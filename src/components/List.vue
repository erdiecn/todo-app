<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{title}}</h1>
      <div class="content">
        <div>
          <ListItem
            v-for="item in activeItems"
            :key="item.id"
            :itemText="item.itemText"
            :itemId="item.id"
            v-on:delete-item="deleteItem(item.id)"
          />
        </div>
        <div><AddListItem v-on:addNewItem="addItem"/></div>
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
    title: String
  },
  components: {
    ListItem,
    AddListItem
  },
  data: () => {
    return {
      listItems: [
        { id: 1, itemText: "Wash the dishes", active: true },
        { id: 2, itemText: "Pick up toys", active: true },
        { id: 3, itemText: "Laundry", active: true },
        { id: 4, itemText: "Walk the dog", active: true }
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
