import Vue from 'vue'
import Vuex from 'vuex'

// 模块
import user from './modules/user'

// getter
import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        user
    },
    getters


});
export default store;



