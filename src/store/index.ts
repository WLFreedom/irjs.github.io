import {createStore} from 'vuex'

export default createStore({
	state: {
		scroll: 0,
		people: [],
		states: [],
		languages: [
			{name: 'English', code: 'en'},
			{name: 'Persian', code: 'fa'},
			{name: 'Sweden', code: 'se'},
			{name: 'Germany', code: 'de'},
			{name: 'Dutch', code: 'nl'},
		]
	},
	getters: {
		scroll: state => state.scroll,
		people: state => state.people,
		states: state => state.states,
		languages: state => state.languages
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
