<template>
	<v-app>
		<div>
			<h1>List people who has been killed in Iran</h1>
			<h2 class="font-weight-light">Some data maybe missing, we still trying to add.</h2>
		</div>
		<router-view class="mt-10" />
		<v-footer>
			Contact: <a href="mailto:imdev7@protonmail.com">Say Hi!</a>
		</v-footer>
	</v-app>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {parseCSV} from "@/utils/csv";
import {Person, State} from "@/type";
import {useStore} from "vuex";

const getPeople = async () => {
	const response = await fetch('/data/people.csv')
	return await response.text()
}

const getStates = async () => {
	const response = await fetch('/data/states.csv')
	return await response.text()
}

onMounted(async () => {
	const store = useStore()

	const peopleData: string = await getPeople()
	const people = parseCSV<Person>(peopleData)
	store.commit('SET_PEOPLE', people)

	const stateData = await getStates()
	const states = parseCSV<State>(stateData)
	store.commit('SET_STATES', states)
})


</script>

<style lang="scss">
#app {
	font-family: 'Quicksand', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

::-webkit-scrollbar {
	width: 20px;
}

::-webkit-scrollbar-track {
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #d6dee1;
	border-radius: 20px;
	border: 6px solid transparent;
	background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #a8bbbf;
}

::-webkit-scrollbar {
	width: 20px;
}

::-webkit-scrollbar-track {
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #d6dee1;
	border-radius: 20px;
	border: 6px solid transparent;
	background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #a8bbbf;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
