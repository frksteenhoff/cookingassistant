<template>
	<b-card
		:title="recipe.name"
		:img-src="getImage()"
		:img-alt="recipe.name"
		img-top
		class="mb-4"
		@click="handleCardClick"
	>
		<b-card-text
			class="mb-2 ml-0 mr-0 p-0"
			style="font-size: 1rem;"
		>
			{{ recipe.teaser }}
		</b-card-text>
	</b-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
		recipe: {
			type: Object,
			required: true
		}
	}
})

@Component({})
export default class RecipeCard extends AppProps {
	handleCardClick() {
		this.$store.dispatch("setRecipe", this.recipe)
		this.$router.push({ path: "Recipes/" + this.recipe.name })
	}

	getImage() {
		return this.recipe.image === "NaN" || !this.recipe.image ? require("../assets/logo.png") : require("../assets/recipes/" + this.recipe.image)
	}
}
</script>
