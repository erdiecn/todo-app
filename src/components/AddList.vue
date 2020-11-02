<template>
  <section class="section">
    <div class="container">
      <input v-model="newList" placeholder="Add new TodoList!" />
      <button v-on:click="getNewList()">+</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddList",
  props: {
    // itemText: String,
    // itemId: Number
  },
  data() {
    return {
      newList: ""
    };
  },
  methods: {
    getNewList: function() {
      this.$store.dispatch("addList", this.newList);
      this.newList = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>