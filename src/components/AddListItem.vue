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
        <button class="button is-primary" v-on:click="getNewItem()">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddListItem",
  props: {
    // itemText: String,
    listId: Number
  },
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    ...mapActions(["addItem"]),

    getNewItem: function() {
      // console.log(this.newItem);
      const payload = { list_id: this.listId, text: this.newItem };
      this.$store.dispatch("addItem", payload);
      this.newItem = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
