<template>
  <div>
    <input v-model="newItem" placeholder="Add new Todo!">
    <button v-on:click="getNewItem()">+</button>
  </div>
  
</template>

<script>
export default {
  name: "AddListItem",
  props: {
    // itemText: String,
    // itemId: Number
  },
  data() {
      return {
          newItem: "",
      }
  },
  methods: {
    getNewItem: function(){
        this.$emit("addNewItem", this.newItem);
        this.newItem = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>