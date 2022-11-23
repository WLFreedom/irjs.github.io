<template>
	<div class="home">
		<v-container class="pa-0 pa-md-4">
			<v-row>
				<v-col class="pt-0" lg="6" md="12" cols="12">
					<BloodFilling/>
				</v-col>
				<v-col class="pt-0" lg="6" md="12" cols="12">
					<TimeLine />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import BloodFilling from "@/components/bloodFilling.vue";
import TimeLine from "@/components/TimeLine.vue";

export default {
	components: {TimeLine, BloodFilling}
}
</script>
