/**
 * Created by Administrator on 2018/9/5.
 */
const state = {
    n: 1
}

const getters = {

}

const actions = {
    increment (context) {
        context.commit('increment')
    }
}

const mutations = {
    increment (state) {
        state.n++
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}