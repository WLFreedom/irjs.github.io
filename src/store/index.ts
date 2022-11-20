import {createStore} from 'vuex'

export default createStore({
	state: {
		scroll: 0,
		people: [],
		states: []
	},
	getters: {
		scroll: state => state.scroll,
		people: state => state.people,
		states: state => state.states,
	},
	mutations: {
		SET_SCROLL(state, payload) {
			state.scroll = payload
		},
		SET_PEOPLE(state, payload) {
			state.people = payload
		},
		SET_STATES(state, payload) {
			state.states = payload
		}
	},
	actions: {},
	modules: {}
})
