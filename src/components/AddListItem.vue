<template>
  <div>
    <div id="body">
      <div class="columns">
        <div class="column is is-four-fifths">
          <label class="label"> Item Title </label>
          <input
            class="input is-normal"
            type="text"
            v-model="newItem"
            v-on:keyup.enter="getNewItem()"
            placeholder="Ex: Assignments, Reading List, Chores, etc."
          />
        </div>
        <div class="column">
          <div class="control">
            
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-two-fifths">
          <div class="control">
            <label class="label"> Added to List </label>
            <div class="select is-normal">
              <select v-model="listId">
                <option disabled value>Select a list</option>
                <option
                  class="dropdown-item"
                  v-for="list in this.$store.getters.allLists"
                  :key="`list-${list.id}`"
                  v-bind:value="list.id"
                >{{ list.title }}</option>
              </select>
            </div>
            
            <!-- <div class="select is-small">
              <select v-model="personal">
                <option
                  id="option"
                  disabled
                  value
                >Will this be a class todo list or a personal todo list?</option>
                <option value="1">Personal Todo List</option>
                <option value="0">Class Todo List</option>
              </select>
            </div> -->
          </div>
        </div>

        <div class="column">
          <div class="control">
            <label class="label"> Due Date </label>
            <vc-date-picker v-model="date" mode="dateTime">
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </template>
            </vc-date-picker>
          </div>
        </div>
      </div>
      <div class="columns">
        <!-- <div class="column is-four-fifths"></div> -->
        <div class="field is-grouped" id="buttons">
          <div class="control">
            <button class="button is-info" v-on:click="getNewItem()">Submit</button>
          </div>
          <div class="control">
            <button class="button is-dark" @click="close">Cancel</button>
          </div>
          <!-- </div> -->
        </div>
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
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";

#body {
  margin: 15px -11px 15px 14px;
  padding: 20px 0 40px 15px;
  // background-color: $beige-light;
  box-shadow: 0px 2px 4px #00000029;
  border: 1px solid #E6E6E7;
  border-radius: 4px;
}

.columns {
  margin-left: 42px;
}

#plus {
  margin-top: 15px;
}

#buttons {
  margin-top: 10px;
  margin-left: 13px;
}

.button {
  padding: 20px 40px;
}

</style>
