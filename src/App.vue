<template>
	<v-app class="pt-4">
		<v-locale-provider>
			<div>
				<h3 class="font-weight-regular">
					{{ $t('title') }}
				</h3>
			</div>
			<router-view/>
			<v-footer class="position-fixed d-flex justify-space-between">
				<div>
					{{ $t('contact') }}:
					<a class="ml-1 text-decoration-none" href="mailto:imdev7@protonmail.com">
						<v-icon color="primary">mdi-email</v-icon>
					</a>
				</div>
				<div class="d-flex align-center">
					<v-select @update:modelValue="languageChanged" menu-icon="mdi-chevron-down"
								prepend-inner-icon="mdi-translate-variant" color="primary" single-line density="compact"
                              v-model="language" :items="store.getters.languages" item-title="name"
                              item-value="code"></v-select>
				</div>
				<div class="ml-4">
					<v-btn href="https://github.com/irjs/irjs.github.io/blob/master/README.md" size="small"
						color="primary">{{ $t('guide_contribute_in_data') }}
					</v-btn>
				</div>
			</v-footer>
		</v-locale-provider>
	</v-app>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, VueElement, watch} from "vue";
import {parseCSV} from "@/utils/csv";
import {Person, State} from "@/type";
import {useStore} from "vuex";
import {useI18n} from "vue-i18n";
import {useLocale} from "vuetify";

const i18n = useI18n({useScope: 'global'})
const {current, rtl} = useLocale()

const store = useStore()
const language = ref({name: 'English', code: 'en'})
const getPeople = async () => {
	const response = await fetch('/data/people.csv')
	return await response.text()
}

const getStates = async () => {
	const response = await fetch('/data/states.csv')
	return await response.text()
}

const languageChanged = (lang: any) => {
	i18n.locale.value = lang
	current.value = lang
}

onMounted(async () => {

	getPeople()
		.then((peopleData) => {
			const people = parseCSV<Person>(peopleData)
			store.commit('SET_PEOPLE', people)
		})


	getStates()
		.then((stateData) => {
			const states = parseCSV<State>(stateData)
			store.commit('SET_STATES', states)
		})
})


</script>

<style lang="scss">
#app {
	font-family: 'Quicksand', 'Vazirmatn', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	.v-footer {
		width: 100%;
		bottom: 0;
		box-shadow: 0 -3px 9px #acacac30;
		z-index: 10;

		.v-input {
			.v-field__outline, .v-input__details {
				display: none;
			}

			.v-field--variant-filled .v-field__overlay {
				border-radius: 4px;
			}
		}
	}
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
