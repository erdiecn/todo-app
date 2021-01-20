import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lists: [],
    loading: true,
    checkedLists: [],
    filterLists: [],
    completedItems: [],
    classFilterLists: [],
    personalFilterLists: [],
    user_id: 1
  },

  getters: {
    allLists: state => state.lists,
    isLoading: state => state.loading,
    checkedLists: state => state.checkedLists,
    filterLists: state => state.filterLists,
    classFilterLists: state => state.classFilterLists,
    personalFilterLists: state => state.personalFilterLists
  },

  actions: {
    async login() {
      try {
        const result = await axios.post(
          "http://localhost:3000/user/login",
          { user_id: 1 },
          { withCredentials: true }
        );
        console.log(result, "login result"); //// this needs to stay
      } catch (err) {
        console.log(err);
      }
    },

    /// go to the api
    async fetchLists({ commit }) {
      try {
        const result = await axios.get("http://localhost:3000/lists", {
          withCredentials: true
        });
        commit("setLists", result.data.lists);
        commit("setLoaded");

        // console.log("fetch", result.data.lists);
        // console.log("stats", this.state.lists);
      } catch (err) {
        console.log(err);
      }
    },

    ///fetch lists, filter by class
    async fetchClassLists({ commit }) {
      try {
        const result = await axios.get("http://localhost:3000/lists", {
          withCredentials: true
        });
        const classResult = result.data.lists.filter(function(list) {
          return list.class_id != null;
        });
        commit("filterClassLists", classResult);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPersonalLists({ commit }) {
      try {
        const result = await axios.get("http://localhost:3000/lists", {
          withCredentials: true
        });
        const personalResult = result.data.lists.filter(function(list) {
          return list.class_id == null;
        });
        commit("filterPersonalLists", personalResult);
      } catch (err) {
        console.log(err);
      }
    },

    async addList({ commit }, newList) {
      try {
        const result = await axios.post(
          "http://localhost:3000/lists",
          {
            title: newList
          },
          { withCredentials: true }
        );
        commit("addList", result.data.list);
      } catch (err) {
        console.log(err);
      }
    },
    async addItem({ commit }, newItem) {
      try {
        const result = await axios.post(
          "http://localhost:3000/item",
          {
            ...newItem
          },
          { withCredentials: true }
        );
        // console.log(result.data, "post to items");
        commit("addItem", result.data.item);
      } catch (err) {
        console.log(err);
      }
    },
    async completeItem({ commit }, itemComplete) {
      try {
        const payload = {
          complete: !itemComplete.complete,
          id: itemComplete.id
        };
        const result = await axios.patch(
          "http://localhost:3000/item",
          payload,
          { withCredentials: true }
        );
        console.log(result.data, "patch complete status"); ///this needs to stay
        commit("completeItem", payload);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteItem({ commit }, itemId) {
      try {
        const result = await axios.delete(
          `http://localhost:3000/item/${itemId}`,
          { withCredentials: true }
        );
        console.log("result", result); ///this needs to stay
        commit("deleteItem", itemId);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteList({ commit }, listId) {
      try {
        const result = await axios.delete(
          `http://localhost:3000/lists/${listId}1`,
          { withCredentials: true }
        );
        console.log("result", result); /// this needs to stay
        commit("deleteList", listId);
      } catch (err) {
        console.log(err);
      }
    },

    updateFilterLists: (state, listId) => {
      if (listId.checked) {
        state.commit("addCheckedLists", listId);
        // console.log("listId", listId);
      } else {
        state.commit("removeCheckedLists", listId);
      }
    },

    filterLists: state => {
      // console.log(state.state.checkedLists, "state"); /// this works
      const result = state.state.lists.filter(list => {
        const isChecked = state.state.checkedLists.includes(list.id);

        return isChecked;
      });
      console.log(result, "the result");
      state.commit("filteredLists", result);
    }
  },

  mutations: {
    setLists: (state, lists) => (state.lists = lists),

    setLoaded: state => (state.loading = false),

    filteredLists: (state, result) => (state.filterLists = result),

    filterClassLists: (state, classResult) =>
      (state.classFilterLists = classResult),

    filterPersonalLists: (state, personalResult) =>
      (state.personalFilterLists = personalResult),

    // setFilter: state => ,

    addList: (state, list) => {
      state.lists = [...state.lists, list];
    },

    addItem: (state, payload) => {
      // console.log("1", payload.listId, payload.text);
      const listKey = state.lists.findIndex(
        element => element.id == payload.list_id
      );
      // console.log(listKey, "Item Text", itemText);
      state.lists[listKey].items.push({
        id: payload.id,
        text: payload.text,
        personal: payload.personal,
        due_date: payload.due_date,
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
    },

    deleteItem: (state, itemId) => {
      const newLists = state.lists.map(list => {
        const newItems = list.items.filter(item => item.id != itemId);
        list.items = newItems;
        return list;
      });
      state.lists = newLists;
    },
    deleteList: (state, listId) => {
      const newLists = state.lists.filter(list => list.id != listId);
      state.lists = newLists;
    },

    addCheckedLists: (state, listId) => {
      // console.log(listId, "addone");
      state.checkedLists.push(parseInt(listId.value)); /// listId is passed with a value that equals the id os the clicked list title
    },

    removeCheckedLists: (state, listId) => {
      // console.log("remove", state.checkedLists, "v", listId.value);

      const result = state.checkedLists.filter(list => list !== listId.value); /// need to remove the clicked
      state.checkedLists = result;
      // console.log(result, "deletecheckedLists");
    }
  }
});
