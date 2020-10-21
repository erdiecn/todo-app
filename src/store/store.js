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
    addList: (state, listTitle) => {
      const id =
        state.lists.length !== 0
          ? state.lists[state.lists.length - 1].id + 1
          : 0;
      const newList = { title: listTitle, active: true, id };
      state.lists = [...state.lists, newList];
    },
    addItem: (state, listId, itemText) => {
      const listKey = state.lists.findIndex(element => element.id == listId);
      console.log(listKey, "Item Text", itemText);
      state.lists[listKey].listItems.push({
        id: 999,
        itemText: "HELLLLLLLOOOOOO",
        active: true
      });
      //   const id =
      //     this.listItems.length !== 0
      //       ? this.listItems[this.listItems.length - 1].id + 1
      //       : 0;
      //   const newItem = { itemText, active: true, id };
      //   this.listItems = [...this.listItems, newItem];
    }
  },
  getters: {
    lists: state => state.lists
  }
});
