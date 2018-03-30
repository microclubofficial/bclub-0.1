import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    aside: {
      opened: !+Cookies.get('asideStatus')
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    TOGGLE_ASIDE: state => {
      if (state.aside.opened) {
        Cookies.set('asideStatus', 1)
      } else {
        Cookies.set('asideStatus', 0)
      }
      state.aside.opened = !state.aside.opened
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    ToggleAside: ({ commit }) => {
      commit('TOGGLE_ASIDE')
    }
  }
}

export default app
