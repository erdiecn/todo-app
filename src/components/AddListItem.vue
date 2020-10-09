<template>
  <div>
    <input v-model="newItem" placeholder="Add new Todo!">
    <button v-on:click="getNewItem(newItem)">+</button>
  </div>
  
</template>

<script>
export default {
  name: "AddListItem",
  props: {
    // itemText: String,
    // itemId: Number
  },
  methods: {
    getNewItem: function(newItemText){
        const newItem = {
            id: 5,
            itemText: newItemText,
            active: true
        }
        this.$emit("addNewItem", newItem);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>