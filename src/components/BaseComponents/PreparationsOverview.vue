<template>
	<div>
		<b-row>
			<!-- Should only have servings or servings_w_type - otherwise something went wrong -->
			<b-col cols="auto" :class="[hasServings && hasPrepTime ? 'ml-md-auto': '']" v-if="hasServings">
				<b-icon icon="person"></b-icon> Antal: <span itemprop="recipeYield">{{ parseInt(recipe.servings) * numberOfPortions }}</span>
			</b-col>
			<b-col cols="auto" :class="[hasServings && hasPrepTime ? 'ml-md-auto': '']" v-if="hasServingsWithType">
				<b-icon icon="person"></b-icon> Antal: <span itemprop="recipeYield">{{ recipe.servings_w_type.servings * numberOfPortions }} {{ recipe.servings_w_type.type }}</span>
			</b-col>
			<b-col cols="auto" :class="[hasPrepTime ? 'mr-md-auto': '']" v-if="hasPrepTime">
				<b-icon icon="clock"></b-icon>  Tilberedningstid <span v-if="!hasOnlyActivePrepTime" v-b-tooltip.hover title="Hvor lang tid du aktivt skal bruge på retten">- aktiv</span>: <span itemprop="prepTime">{{ activePrepTime }}</span>
				<span v-if="!hasOnlyActivePrepTime" itemprop="cookTime" class="ml-3"><span v-b-tooltip.hover title="Tid der går til hævning, kogning, bagning etc.">passiv:</span> {{ passivePrepTime }}</span>
				<span v-if="!hasOnlyActivePrepTime" class="ml-3" v-b-tooltip.hover title="Den samlede tid det tager før du kan nyde det, du har lavet.">samlet: {{ totalCookTime }}</span>
				<br>
			</b-col>
		</b-row>
		<b-row class="mt-2 mb-xs-3">
			<b-col cols="auto">
				Skalering
			</b-col>
			<b-col cols="auto" class="text-left">
				<b-form-select
					v-model="numberOfPortions"
					:options="portionScaling"
					@change="$root.$emit('update-portions', numberOfPortions)"
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
	numberOfPortions = 1;

	toHoursAndMinutes(minutes: number) {
		if (minutes % 60 === 0) {
			return (minutes / 60) + " timer "
		} else if ((minutes / 60) < 1) {
			return (minutes % 60) + " min"
		}
		return Math.floor((minutes / 60)) + " timer " + (minutes % 60) + " min"
	}

	get hasOnlyActivePrepTime() {
		// @ts-ignore
		return !this.recipe.preparationtime.passive === ""
	}

	get totalCookTime() {
		// @ts-ignore
		return this.toHoursAndMinutes(Number(this.recipe.preparationtime.active) + Number(this.recipe.preparationtime.passive))
	}

	get activePrepTime() {
		// @ts-ignore
		return this.toHoursAndMinutes(Number(this.recipe.preparationtime.active))
	}

	get passivePrepTime() {
		// @ts-ignore
		return this.toHoursAndMinutes(Number(this.recipe.preparationtime.passive))
	}

	get hasServings() {
		return "servings" in this.recipe && this.recipe.servings
	}

	get hasServingsWithType() {
		return "servings_w_type" in this.recipe && this.recipe.servings_w_type
	}

	get hasPrepTime() {
		return "preparationtime" in this.recipe && this.recipe.preparationtime
	}

	get portionScaling(): number [] {
		return [0.25, 0.5, 0.75].concat(Array(10).fill(1).map((x, y) => x + y))
	}
}
</script>
