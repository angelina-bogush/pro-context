import { createStore } from 'vuex'
//сначала хотела сделать через store, но решила все же не усложнять
export default createStore({
  state: {
    lists: [
      {
        id: 1,
        isSelected: false,
        items: [
          { id: 1, name: 'Item 1', quantity: 1, color: '', isSelected: false },
          { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
          { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 4, name: 'Item 4', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 5, name: 'Item 5', quantity: 3, color: '#0000ff', isSelected: false },
        ] },
        {
        id: 2,
        isSelected: false,
        items: [
          { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
          { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
          { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 4, name: 'Item 4', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 5, name: 'Item 5', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 6, name: 'Item 6', quantity: 3, color: '#0000ff', isSelected: false },
        ] },
        {
          id: 3,
        isSelected: false,
        items: [
          { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
          { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
          { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 4, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
        ] },
        {
        id: 4,
        isSelected: false,
        items: [
          { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
          { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
          { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 4, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 5, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
        ] },
        {
        id: 5,
        isSelected: false,
        items: [
          { id: 1, name: 'Item 1', quantity: 1, color: '#ff0000', isSelected: false },
          { id: 2, name: 'Item 2', quantity: 2, color: '#00ff00', isSelected: false },
          { id: 3, name: 'Item 3', quantity: 3, color: '#0000ff', isSelected: false },
          { id: 4, name: 'Item 4', quantity: 4, color: '#0000ff', isSelected: false },
          { id: 5, name: 'Item 5', quantity: 5, color: '#0000ff', isSelected: false },
          { id: 6, name: 'Item 6', quantity: 6, color: '#0000ff', isSelected: false },
          { id: 7, name: 'Item 7', quantity: 7, color: '#0000ff', isSelected: false },
        ] },

    ]
  },
  getters: {
    getLists: (state) => state.lists,
    getSelectedItems: (state) => {
      const selectedItems = [];
  
      state.lists.forEach((list) => {
        list.items.forEach((item) => {
          if (item.isSelected) {
            selectedItems.push(item);
          }
        });
      });
  
      return selectedItems;
    }
  
  },
  mutations: {
    UPDATE_ITEM_SELECT(state, { listId, itemId, isSelected }) {
      const list = state.lists.find((list) => list.id === listId);
      
      if (list) {
        const item = list.items.find((item) => item.id === itemId);
        
        if (item) {
          item.isSelected = isSelected;
        }
      }
    }
  
  },
  actions: {
    selectItem({ commit }, { listId, itemId }) {
      commit('UPDATE_ITEM_SELECT', { listId, itemId, isSelected: true });
    }
  
  },
  modules: {
  }
})
