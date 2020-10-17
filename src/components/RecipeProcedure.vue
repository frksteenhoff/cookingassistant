<template>
	<b-row class="mt-0 pl-3">
		<b-col cols="12" class="mb-3 pl-0">
			<RecipeHeader
				title="Procedure"
			/>
		</b-col>
		<p v-if="recipe.steps.length <= 1" class="pl-0">Fremgangsmåde kommer snart!</p>
		<ul v-for="(step, index) in recipe.steps" :key="step + index" class="mb-3">
			<li :class="['ml-0', (step.split(' ').length === 1) ? 'title font-weight-bold' : '']">
				{{ step }}
			</li>
		</ul>
	</b-row>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

import RecipeHeader from "@/components/BaseComponents/RecipeHeader.vue"

@Component({
	components: {
		RecipeHeader
	}
})
export default class RecipeProcedure extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;
}
</script>

<style scoped>
.title {
	margin-right: 23rem; /* to ensure that li item after title is on new line */
}
</style>
