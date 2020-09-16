<template>
	<div>
		<b-row>
			<b-col cols="auto" class="ml-md-auto" v-if="'servings' in recipe && recipe.servings">
				<b-icon icon="person"></b-icon> Antal: {{ recipe.servings }}
			</b-col>
			<b-col cols="auto" class="mr-md-auto" v-if="'preparationtime' in recipe && recipe.preparationtime">
				<b-icon icon="clock"></b-icon>  Tilberedningstid: {{ recipe.preparationtime }}
			</b-col>
		</b-row>
		<b-row class="mt-2 mb-xs-3">
			<b-col cols="auto">
				Skalering
			</b-col>
			<b-col cols="auto" class="text-left">
				<b-form-select
					v-model="numberOfPortions"
					:options="[0.5].concat(Array(10).fill(1).map((x, y) => x + y))"
					size="sm"
				/>
			</b-col>
		</b-row>
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
