import {createStore} from 'vuex'

export default createStore({
	state: {
		scroll: 0
	},
	getters: {
		scroll: state => state.scroll
	},
	mutations: {
		SET_SCROLL(state, payload) {
			state.scroll = payload
		}
	},
	actions: {},
	modules: {}
})
