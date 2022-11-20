<template>
	<div class="time-line-wrapper">
		<div class="time-line">
			<v-timeline side="end" truncate-line="end">
				<v-timeline-item
					fill-dot
					class="mb-12"
					dot-color="orange"
					size="large"
				>
					<template v-slot:icon>
						<v-icon>mdi-alert</v-icon>
					</template>
				</v-timeline-item>
				<v-timeline-item v-for="(item, i) in store.getters.people" small :key="i">
					<v-card theme="dark" class="d-flex flex-column align-start pa-3 item">
						<div class="d-inline-flex align-center">
							<h3 class="font-weight-regular" v-text="item.name" />
							<span>, Location: {{item.state}}</span>
						</div>
						<div class="mt-3 d-inline-flex align-center">
							<v-icon>mdi-calendar-today</v-icon>
							<span class="ml-1 mr-4" v-text="item.date" />
							<v-icon>mdi-cake-variant</v-icon>
							<span class="ml-1" v-text="`Age: ${item.age}`" />
						</div>
					</v-card>
				</v-timeline-item>
			</v-timeline>
		</div>
		<div class="gradient"></div>
	</div>
</template>

<script lang="ts" setup>
import {onMounted} from "vue";
import {useStore} from "vuex";
const store = useStore();

onMounted(() => {
	const $timeline = document.querySelector('.time-line') as HTMLDivElement
	if ($timeline) {
		$timeline.addEventListener('scroll', () => {
			const height = $timeline.scrollHeight - $timeline.clientHeight
			const percent = Math.round(($timeline.scrollTop * 100) / (height))
			store.commit('SET_SCROLL', percent)
		})
	}
})
</script>

<style scoped lang="scss">
.v-card.item {
	box-shadow: 0 3px 12px rgba(100, 100, 100, .2);
}
.time-line-wrapper {
	position: relative;
}
.time-line {
	scroll-behavior: smooth;
	max-height: 75vh;
	overflow: auto;
	position: relative;
	padding-bottom: 64px;
}
.gradient {
	content: "";
	height: 64px;
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	background: linear-gradient(0deg, #ffffff 15%, #ffffff90 80%, #FFFFFF00 100%);
	z-index: 10;
}
</style>
