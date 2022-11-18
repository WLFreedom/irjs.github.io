<template>
	<div class="home">
		<v-container>
			<v-row>
				<v-col lg="6" md="12" cols="12">
					<BloodFilling/>
				</v-col>
				<v-col lg="6" md="12" cols="12">
					List
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import BloodFilling from "@/components/bloodFilling.vue";

export default {
	components: {BloodFilling}
}
</script>
