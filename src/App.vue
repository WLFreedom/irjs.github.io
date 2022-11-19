<template>
	<div>
		<h1>List people who has been killed in Iran</h1>
		<h2 class="font-weight-light">Some data maybe missing, we still trying to add.</h2>
	</div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
	import {onMounted} from "vue";
	import {parseCSV} from "@/utils/csv";
	import {Person} from "@/type";
	const getPeople = async () => {
		const response = await fetch('/data/people.csv')
		return await response.text()
	}
	onMounted(async() => {
		let peopleData: string | string[] = await getPeople()
		const people: Array<Person> = parseCSV<Person>(peopleData)
		console.log(people)
	})


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}::-webkit-scrollbar {
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
