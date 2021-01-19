<template>
  <div>
    <div class="field">
      <label class="label">New Todo Item</label>
      <div class="control">
        <input
          class="input"
          type="text"
          v-model="newItem"
          v-on:keyup.enter="getNewItem()"
          placeholder="Add new Todo text!"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Personal vs Public</label>
      <div class="control">
        <div class="select">
          <select v-model="personal">
            <option disabled value="">Please select one</option>
            <option value="1">Personal</option>
            <option value="0">Public</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Choose list to add item</label>
      <div class="control">
        <div class="select">
          <select v-model="listId">
            <option disabled value="">Please select one</option>
            <option
              class="dropdown-item"
              v-for="list in this.$store.getters.allLists"
              :key="`list-${list.id}`"
              v-bind:value="list.id"
              >{{ list.title }}</option
            >
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Choose Due Date and Time</label>
      <div class="control">
        <vc-date-picker v-model="selectedDate" mode="dateTime" />
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button " v-on:click="getNewItem()">
          Submit
        </button>
      </div>
      <div class="control">
        <button class="button is-light" @click="close">Cancel</button>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AddListItem",
  props: {},
  data() {
    return {
      newItem: "",
      personal: "",
      listId: "",
      selectedDate: null,
      showModal: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    getNewItem: function() {
      const payload = {
        list_id: this.listId,
        text: this.newItem,
        personal: this.personal,
        due_date: this.selectedDate
      };
      this.$store.dispatch("addItem", payload);
      this.newItem = "";

      this.$emit("close");
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
