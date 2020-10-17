<template>
	<b-container class="mt-3">
		<b-row class="mb-3">
			<h1>Opskrifter</h1>
		</b-row>
		<b-row>
			<b-col cols="12">
				<DropdownForm
					:availableTags="tags"
				/>
			</b-col>
			<b-col cols="12">
				{{ recipesInAlphabeticalOrder.length }} resultater
			</b-col>
		</b-row>
		<b-row>
			<b-col id="recipes" cols="12" md="6" lg="4" xl="3" v-for="recipe in recipesInAlphabeticalOrder" :key="recipe.name">
				<RecipeCard
					:recipe="recipe"
				/>
			</b-col>
			<!--<b-pagination
				v-model="currentPage"
				:total-rows="noOfRecipes"
				:per-page="perPage"
				first-text="Først"
				prev-text="Forrige"
				next-text="Næste"
				last-text="Sidste"
				aria-controls="recipes"
			/>-->
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import RecipeCard from "@/components/BaseComponents/RecipeCard.vue"
import DropdownForm from "@/components/BaseComponents/DropdownForm.vue"

const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {
		RecipeCard,
		DropdownForm
	}
})
export default class Recipes extends AppProps {
	chosenValues: string[] = []
	currentPage = 1
	perPage = 15

	created() {
		this.$root.$on("recipeSearchUpdated", this.setChosenValues)
	}

	setChosenValues(values: string[]) {
		this.chosenValues = values
	}

	get tags() {
		return this.$store.getters.getTags
	}

	get recipeNames() {
		// @ts-ignorec
		return this.currentRecipes.map(recipe => recipe.name)
	}

	get noOfRecipes() {
		return this.recipesInAlphabeticalOrder.length
	}

	get currentRecipes() {
		if (this.$route.name === "recipes") {
			if (this.chosenValues.length > 0) {
				// @ts-ignore
				return this.$store.getters.getRecipes.filter(recipe => recipe.categories.some(category => this.chosenValues.includes(category)))
			} else {
				return this.$store.getters.getRecipes
			}
		} else {
			// @ts-ignore
			return this.$store.getters.getRecipes.filter(recipe => recipe.categories.some(category => this.getRecipeCategory(this.$route.name).includes(category)))
		}
	}

	get recipesInAlphabeticalOrder() {
		// @ts-ignore
		return this.currentRecipes.sort((a, b) => (a.name > b.name) ? 1 : -1)
	}

	getRecipeCategory(path: string): string[] {
		switch (path) {
		case "dinner":
			return ["aftensmad"]
		case "breakfast":
			return ["morgenmad"]
		case "baking":
			return ["bagning"]
		case "dessert":
			return ["dessert"]
		case "sauces":
			return ["sauce", "dip", "dressing", "marinade"]
		case "vegetarian":
			return ["vegetarisk"]
		case "bread":
			return ["brød"]
		default:
			return ["unknown"]
		}
	}
}
</script>
