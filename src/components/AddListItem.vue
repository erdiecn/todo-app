<template>
  <div id="body">
    <div class="columns">
      <div class="column is is-three-fifths">
        <input
          class="input is-small is-success"
          type="text"
          v-model="newItem"
          v-on:keyup.enter="getNewItem()"
          placeholder="Add new task!"
        />
      </div>
      <div class="column">
        <div class="control">
          <p>
            Due on:
            <vc-date-picker v-model="date" mode="dateTime">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </vc-date-picker>
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-two-fifths">
        <div class="control">
          <div class="select is-small">
            <select v-model="personal">
              <option
                id="option"
                disabled
                value
              >Will this be a class todo list or a personal todo list?</option>
              <option value="1">Personal Todo List</option>
              <option value="0">Class Todo List</option>
            </select>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="control">
          <div class="select is-small">
            <select v-model="listId">
              <option disabled value>Which list will this item be added to?</option>
              <option
                class="dropdown-item"
                v-for="list in this.$store.getters.allLists"
                :key="`list-${list.id}`"
                v-bind:value="list.id"
              >{{ list.title }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-four-fifths"></div>
      <div class="field is-grouped" id="buttons">
        <div class="control">
          <button class="button is-small" v-on:click="getNewItem()">Add Task</button>
        </div>
        <div class="control">
          <button class="button is-small" @click="close">Cancel</button>
        </div>
        <!-- </div> -->
      </div>
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
      showModal: false,
      date: new Date()
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

#body {
  padding: 20px 0 20px 15px;
  background-color: $beige-light;
}

#plus {
  margin-top: 15px;
}

.select {
  border: none !important;
}

#buttons {
  margin-bottom: -1px;
}
</style>
