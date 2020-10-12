<template>
  <div>
    <div class="field">
      <label class="label">Add new todo item</label>
      <div class="control">
        <input class="input" type="text" v-model="newItem" placeholder="Add new Todo!" />
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" v-on:click="getNewItem()">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
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
      newItem: ""
    };
  },
  methods: {
    getNewItem: function() {
      this.$emit("addNewItem", this.newItem);
      this.newItem = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>