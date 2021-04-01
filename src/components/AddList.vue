<template>
  <section class="section">
    <div class="field is-grouped">
      <font-awesome-icon :icon="['fas', 'plus']" class="icon" />
      <input
        class="input is-normal"
        v-model="newList"
        placeholder="Add new TodoList!"
        v-on:keyup.enter.prevent="getNewList()"
      />
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
      event.preventDefault();
      this.$store.dispatch("addList", this.newList);
      this.newList = "";
      this.$store.dispatch("fetchPersonalLists");
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
.icon {
  margin-right: 5px;
  margin-top: 3px;
}
</style>
