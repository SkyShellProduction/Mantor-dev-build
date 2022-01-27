import { createStore } from 'vuex'

export default createStore({
  state: {
    changeTabs: true,
    showModal: false,
    openMenu: false 
  },
  mutations: {
    setTabs(state, show){
        state.changeTabs = show
    },
    setModal(state, show) {
      state.showModal = show
    },
    setOpenMenu(state, open) {
      state.openMenu = open
    }
  },
  actions: {
     setTabs({commit}, show) {
       commit('setTabs', show);
     },
     setModal({commit}, show) {
      commit('setModal', show);
    },
    setOpenMenu({commit}, open){
      commit('setOpenMenu', open);
    }
  },
  getters: {
      getTabs: state => state.changeTabs,
      getModal: state => state.showModal,
      getOpenMenu: state => state.openMenu
  }
})
