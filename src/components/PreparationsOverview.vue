<template>
	<div>
		<b-col v-if="'servings' in recipe && recipe.servings" class="mb-2 mt-2">
			<b-icon icon="person"></b-icon> Antal: {{ recipe.servings }}
		</b-col>
		<b-col v-if="'preparationtime' in recipe && recipe.preparationtime" class="mb-4">
			<b-icon icon="clock"></b-icon>  Tilberedningstid: {{ recipe.preparationtime }}
		</b-col>
		Skalering
		<b-col class="mb-2">
			<b-form-select
				v-model="numberOfPortions"
				:options="[0.5].concat(Array(10).fill(1).map((x, y) => x + y))"
				size="sm"
			/>
		</b-col>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

import RecipeHeader from "@/components/BaseComponents/RecipeHeader.vue"

@Component({
	components: {
		RecipeHeader
	}
})
export default class PreparationsOverview extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;
	@Prop({ required: true }) numberOfPortions!: number;
}
</script>
