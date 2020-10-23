import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { lists: [] },

  getters: {
    lists: state => state.lists
  },

  actions: {
    async fetchLists({ commit }) {
      try {
        const lists = await axios.get("http://localhost:3000/lists");
        console.log("hey fetch is working", lists.data);
        commit("setLists", lists.data);
      } catch (err) {
        console.log(err);
      }
    }
  },

  mutations: {
    setLists: (state, lists) => (state.lists = lists),
    addList: (state, listTitle) => {
      const id =
        state.lists.length !== 0
          ? state.lists[state.lists.length - 1].id + 1
          : 0;
      const newList = { title: listTitle, active: true, id };
      state.lists = [...state.lists, newList];
    },
    addItem: (state, payload) => {
      console.log("1", payload.listId, payload.itemText);
      const listKey = state.lists.findIndex(
        element => element.id == payload.listId
      );
      // console.log(listKey, "Item Text", itemText);
      state.lists[listKey].listItems.push({
        id: 999,
        itemText: payload.itemText,
        active: true
      });
      //   const id =
      //     this.listItems.length !== 0
      //       ? this.listItems[this.listItems.length - 1].id + 1
      //       : 0;
      //   const newItem = { itemText, active: true, id };
      //   this.listItems = [...this.listItems, newItem];
    }
  }
});
