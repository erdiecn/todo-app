import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { lists: [], loading: true },

  getters: {
    allLists: state => state.lists,
    isLoading: state => state.loading
  },

  actions: {
    async fetchLists({ commit }) {
      try {
        const result = await axios.get("http://localhost:3000/lists");
        console.log("hey fetch is working", result.data);
        commit("setLists", result.data.lists);
        commit("setLoaded");
      } catch (err) {
        console.log(err);
      }
    },

    async addList({ commit }, newList) {
      try {
        const result = await axios.post("http://localhost:3000/lists", {
          title: newList
        });
        console.log(result.data, "post was called");
        commit("addList", result.data.list);
      } catch (err) {
        console.log(err);
      }
    },
    async addItem({ commit }, newItem) {
      try {
        const result = await axios.post("http://localhost:3000/item", {
          ...newItem
        });
        console.log(result.data, "post to items");
        commit("addItem", result.data.item);
      } catch (err) {
        console.log(err);
      }
    },
    async completeItem({ commit }, itemComplete) {
      try {
        console.log(itemComplete, "itemComplete");
        const payload = {
          complete: !itemComplete.complete,
          id: itemComplete.id
        };
        const result = await axios.patch("http://localhost:3000/item", payload);

        console.log(result.data, "patch complete status");
        commit("completeItem", payload);
      } catch (err) {
        console.log(err);
      }
    }
  },

  mutations: {
    setLists: (state, lists) => (state.lists = lists),

    setLoaded: state => (state.loading = false),

    addList: (state, list) => {
      state.lists = [...state.lists, list];
    },

    addItem: (state, payload) => {
      // console.log("1", payload.listId, payload.text);
      const listKey = state.lists.findIndex(
        element => element.id == payload.list_id
      );
      // console.log(listKey, "Item Text", itemText);
      console.log(state.lists[listKey], "listkey");
      state.lists[listKey].items.push({
        id: payload.id,
        text: payload.text,
        active: payload.active,
        complete: payload.complete,
        list_id: payload.list_id
      });
    },

    completeItem: (state, payload) => {
      const newLists = state.lists.map(list => {
        const newItems = list.items.map(item => {
          if (item.id == payload.id) {
            item.complete = payload.complete;
          }
          return item;
        });
        list.items = newItems;
        return list;
      });
      state.lists = newLists;
    }
  }
});
