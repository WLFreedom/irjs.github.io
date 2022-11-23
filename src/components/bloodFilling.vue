<template>
	<div class="blood-map">
		<IranMap />
		<div class="wave-wrapper">
			<ul class="waves" aria-hidden="true">
				<li>wave 1</li>
				<li>wave 2</li>
				<li>wave 3</li>
				<li>wave 4</li>
			</ul>
		</div>
		<div class="wave-support-wrapper">
			<div class="waves-support"></div>
		</div>
	</div>

</template>
<script lang="ts" setup>
import {useStore} from "vuex";
import {onMounted, reactive, ref, watch} from "vue";
let bloodHeight = 480
const store = useStore();

watch(() => store.getters.scroll, (p) => {
	animate(p)
})
const animate = (percent: number) => {
	const $waves = document.querySelector('.waves') as HTMLDivElement
	const $waveSupport = document.querySelector('.waves-support') as HTMLDivElement

	if ($waves && $waveSupport) {
		if (window.innerWidth < 960) {
			bloodHeight = window.innerHeight * 0.95
		}
		const x = Math.round((percent * bloodHeight) / 100)
		$waves.style.transform = `translateY(-${x}px)`
		$waveSupport.style.height = `${x}px`
	}
}

</script>
<style>
:root {
	--svg-wave: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 128'%3E%3Cpath d='M0 48c237-62 403-63 640 0 237 62 403 62 640 0v80H0V48z'/%3E%3C/svg%3E");
	--waves-width: 640px;
	--waves-height: 64px;
	--anim-duration: 5s;
	--max-width: 100%;
	/* 	--max-width: 960px; */
	--blue: #ff0000;
	--blue-siw: #e20000;
	--blue-siw: hsl(346, 100%, 44%);
	--filter-black-to-blue: invert(48%) sepia(79%) saturate(2881%) hue-rotate(395deg) brightness(103%) contrast(107%);
	--filter-black-to-blue-siw: invert(61%) sepia(80%) saturate(3783%) hue-rotate(350deg) brightness(69%) contrast(501%);
}
.blood-map {
	height: 593px;
	position: relative;
}
.waves-support, .waves {
	transition: all cubic-bezier(0.73, 0.2, 0.51, 1.69) 2s;
}
.waves {
	position: absolute;
	bottom: 0;
	width: 654px;
	/*animation: moveTop ease-in-out 5s;*/
	-webkit-animation-fill-mode: forwards;
}
.wave-wrapper, .wave-support-wrapper {
	background: transparent;
	height: 593px;
	position: absolute;
	top: 0;
	width: 654px;
	clip-path: url(#map);
}
.wave-wrapper {
	background: #111;
}
.waves-support {
	content: '';
	position: absolute;
	width: 100%;
	display: block;
	background: #ff0000;
	height: 0;
	bottom: 0;
	z-index: 1;
	/*animation: increaseHeight ease-in-out 5s;*/
	-webkit-animation-fill-mode: forwards;

}
.waves li {
	position: absolute;
	display: block;
	bottom: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: var(--waves-height);
	color: transparent;
	-webkit-user-select: none;
	user-select: none;
	background-image: var(--svg-wave);
	background-size: var(--waves-width) var(--waves-height);
	background-repeat: repeat-x;
	animation: animateWave var(--anim-duration) linear infinite;
	filter: var(--filter-black-to-blue-siw);
}

@media screen and (max-width: 959px) {
	.blood-map {
		height: unset;
	}
	.wave-wrapper, .wave-support-wrapper {
		clip-path: none;
		height: 100vh;
		position: fixed;
		width: 100%;
	}
	.wave-wrapper {
		background: transparent;
	}
	.waves {
		width: 100%;
	}
}

@keyframes animateWave {
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: var(--waves-width);
	}
}
.waves li:nth-child(1) {
	bottom: -15px;
}
.waves li:nth-child(2) {
	bottom: -7px;
	opacity: .7;
}
.waves li:nth-child(3) {
	bottom: -5px;
	opacity: .5;
}
.waves li:nth-child(4) {
	opacity: .3;
}
.waves li:nth-child(even) {
	animation-direction: reverse;
}
.waves li:nth-child(n+3) {
	background-size: calc(var(--waves-width) / 2);
	background-image: var(--svg-wave), linear-gradient(to top, black 50%, transparent 50%);
}
@keyframes moveTop {
	0% {
		transform: translateY(0);
	}
	100% {
		transform: translateY(-480px);
	}
}
@keyframes increaseHeight {
	0% {
		height: 0;
	}
	100% {
		height: 480px;
	}
}
</style>
<script lang="ts">
import IranMap from "@/components/iranMap.vue";
export default {
	components: {IranMap}
}
</script>
