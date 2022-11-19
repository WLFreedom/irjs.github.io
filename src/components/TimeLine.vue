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
				<v-timeline-item v-for="(item, i) in items" small :key="i">
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
import {reactive} from "vue";

const items = reactive([
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},
	{
		name: 'Mahsa Amini',
		date: '2022-08-12',
		state: '04'
	},

])
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
