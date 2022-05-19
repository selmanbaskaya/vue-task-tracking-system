const state = {
  drawerStatus: true,
  drawerItemList: [
    { title: "TIMESHEET", icon: "mdi-calendar-clock" },
    { title: "DASHBOARD", icon: "mdi-desktop-mac-dashboard" },
    { title: "REPORTS", icon: "mdi-chart-areaspline" },
    { title: "PROJECTS", icon: "mdi-file-document" },
  ],
};

const getters = {
  drawerStatus: function (state) {
    return state.drawerStatus;
  },
  drawerItemList: function (state) {
    return state.drawerItemList;
  },
};

const actions = {
  updateDrawerStatus: function ({ commit }) {
    commit("updateDrawerStatus");
  },
};

const mutations = {
  updateDrawerStatus: function (state) {
    state.drawerStatus = !state.drawerStatus;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
