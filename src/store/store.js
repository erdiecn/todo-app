import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lists: [
      {
        id: 1,
        title: "Chores1",
        active: true,
        listItems: [
          { id: 11, itemText: "Wash the dishes", active: true },
          { id: 21, itemText: "Pick up toys", active: true },
          { id: 31, itemText: "Laundry", active: true },
          { id: 41, itemText: "Walk the dog", active: true }
        ]
      },
      {
        id: 2,
        title: "Chores2",
        active: true,
        listItems: [
          { id: 12, itemText: "Wash the dishes", active: true },
          { id: 22, itemText: "Pick up toys", active: true },
          { id: 32, itemText: "Laundry", active: true },
          { id: 42, itemText: "Walk the dog", active: true }
        ]
      },
      {
        id: 3,
        title: "Chores3",
        active: true,
        listItems: [
          { id: 13, itemText: "Wash the dishes", active: true },
          { id: 23, itemText: "Pick up toys", active: true },
          { id: 33, itemText: "Laundry", active: true },
          { id: 43, itemText: "Walk the dog", active: true }
        ]
      }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    lists: state => state.lists
  }
});
