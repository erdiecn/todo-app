<template>
  <div>
    <div class="field">
      <label class="label"> New Todo Item</label>
      <div class="control">
        <input
          class="input "
          type="text"
          v-model="newItem"
          v-on:keyup.enter="getNewItem()"
          placeholder="Add new Todo!"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Personal vs Private</label>
      <div class="control">
        <div class="select">
          <select>
            <option> Personal </option>
            <option> Personal </option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Choose list to add item too</label>
      <div class="control">
        <div class="select">
          <select>
            <option
              class="dropdown-item"
              v-for="list in this.$store.getters.allLists"
              :key="`list-${list.id}`"
              :listId="list.id"
              :listTitle="list.title"
              >{{ list.title }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label"> Choose Due Date and Time</label>
      <div class="control">
        <vc-date-picker v-model="selectedDate" />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:keyup.enter="getNewItem()">
          Submit
        </button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AddListItem",
  props: {
    listId: Number
  },
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    getNewItem: function() {
      const payload = { list_id: this.listId, text: this.newItem };
      this.$store.dispatch("addItem", payload);
      this.newItem = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
.input {
  margin-top: 8px;
  background-color: white;
  border: solid 1px;
  /* border-color: $beige-light; */
}
</style>
