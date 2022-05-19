const state = {
    drawerStatus: true,
};

const getters = {
    drawerStatus: function(state) {
        return state.drawerStatus
    },
};

const actions = {
    updateDrawerStatus: function({ commit }) {
        commit('updateDrawerStatus');
    },
};

const mutations = {
    updateDrawerStatus: function(state) {
        state.drawerStatus = !state.drawerStatus;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
