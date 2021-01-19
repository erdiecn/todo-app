<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <input
        class="input is-primary column is-two-thirds"
        v-model="newList"
        placeholder="Add new TodoList!"
      />
      <button class="button is-primary column" v-on:click="getNewList()">Submit</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddList",
  props: {},
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
<style scoped>
.section {
  /* background-color: blueviolet; */

  width: 100%;
}

button {
  margin-left: 20px;
}
</style>