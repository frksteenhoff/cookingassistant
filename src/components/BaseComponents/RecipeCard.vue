<template>
	<b-card
		:title="recipe.name"
		:img-src="getImage()"
		:img-alt="recipe.name"
		img-top
		class="img-height mb-4 opacity-change"
		@click="handleCardClick"
	>
		<b-card-text
			class="mb-2 ml-0 mr-0 p-0"
			style="font-size: 1rem; min-height: 4rem;"
		>
			{{ recipe.teaser }}
		</b-card-text>
	</b-card>
</template>

<script lang="ts">
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
		this.$router.push({ path: "recipes/" + this.recipe.name })
	}

	getImage() {
		return this.recipe.image === "NaN" || !this.recipe.image ? require("@/assets/recipes/recipe_default.jpg") : require("@/assets/recipes/" + this.recipe.image)
	}
}
</script>

<style scoped>
img.card-img-top {
	max-height: 28rem;
	min-height: 28rem;
}
</style>
