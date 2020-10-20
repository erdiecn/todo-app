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
            :itemText="item.itemText"
            :itemId="item.id"
            v-on:delete-item="deleteItem(item.id)"
          />
        </div>
        <div><AddListItem v-on:addNewItem="addItem" /></div>
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
    listTitle: String,
    listId: Number,
    listItems: Array,

  },
  components: {
    ListItem,
    AddListItem,
  },
  data: () => {
    return {
      
    };
  },
  computed: {
    activeItems() {
      return this.listItems.filter((item) => {
        return item.active;
      });
    },
  },
  methods: {
    deleteItem(id) {
      this.listItems = this.listItems.map((obj) => {
        if (obj.id == id) {
          obj.active = false;
        }
        return obj;
      });
      console.log("Almost deleted", id);
    },
    addItem(itemText) {
      const id =
        this.listItems.length !== 0
          ? this.listItems[this.listItems.length - 1].id + 1
          : 0;
      const newItem = { itemText, active: true, id };
      this.listItems = [...this.listItems, newItem];
    },
    deactivateList: function (listId) {
      console.log("deleted", listId);
      this.$emit("delete-list");
    },
    // renameList: function(listId){

    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
