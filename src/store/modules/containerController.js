const state = {
  timeSheetCompStatus: false,
  dashboardCompStatus: false,
  reportsCompStatus: false,
  projectsCompStatus: false,
};

const getters = {
  timeSheetCompStatus: function (state) {
    return state.timeSheetCompStatus;
  },
  dashboardCompStatus: function (state) {
    return state.dashboardCompStatus;
  },
  reportsCompStatus: function (state) {
    return state.reportsCompStatus;
  },
  projectsCompStatus: function (state) {
    return state.projectsCompStatus;
  },
};

const actions = {
  updateTimeSheetCompStatus: function ({ commit }) {
    commit("updateTimeSheetCompStatus");
  },
  updateDashboardCompStatus: function ({ commit }) {
    commit("updateDashboardCompStatus");
  },
  updateReportsCompStatus: function ({ commit }) {
    commit("updateReportsCompStatus");
  },
  updateProjectsCompStatus: function ({ commit }) {
    commit("updateProjectsCompStatus");
  }
};

const mutations = {
  updateTimeSheetCompStatus: function (state) {
    state.timeSheetCompStatus = true;
    state.dashboardCompStatus = false;
    state.reportsCompStatus = false;
    state.projectsCompStatus = false;
  },
  updateDashboardCompStatus: function (state) {
    state.timeSheetCompStatus = false;
    state.dashboardCompStatus = true;
    state.reportsCompStatus = false;
    state.projectsCompStatus = false;
  },
  updateReportsCompStatus: function (state) {
    state.timeSheetCompStatus = false;
    state.dashboardCompStatus = false;
    state.reportsCompStatus = true;
    state.projectsCompStatus = false;
  },
  updateProjectsCompStatus: function (state) {
    state.timeSheetCompStatus = false;
    state.dashboardCompStatus = false;
    state.reportsCompStatus = false;
    state.projectsCompStatus = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
