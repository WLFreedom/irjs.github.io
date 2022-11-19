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
					<div class="d-flex">
						<strong class="mr-4" v-text="item.date" />
						<div>
							<strong v-text="item.name" />
						</div>
					</div>
				</v-timeline-item>
			</v-timeline>
		</div>
		<div class="gradient"></div>
	</div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";
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
.time-line-wrapper {
	position: relative;
}
.time-line {
	scroll-behavior: smooth;
	max-height: 50vh;
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
