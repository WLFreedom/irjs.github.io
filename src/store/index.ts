import {createStore} from 'vuex'

export default createStore({
	state: {
		scroll: 0,
		people: []
	},
	getters: {
		scroll: state => state.scroll,
		people: state => state.people
	},
	mutations: {
		SET_SCROLL(state, payload) {
			state.scroll = payload
		},
		SET_PEOPLE(state, payload) {
			state.people = payload
		}
	},
	actions: {},
	modules: {}
})
