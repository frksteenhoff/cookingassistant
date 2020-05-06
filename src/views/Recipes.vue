<template>
	<b-container class="mt-3">
		<b-row class="mb-3">
			<h1 class="ml-3">Opskrifter</h1>
		</b-row>
		<b-row>
			<b-col cols="12" md="6" lg="4" xl="3" v-for="recipe in recipes" :key="recipe.name">
				<RecipeCard
					:recipe="recipe"
				/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import RecipeCard from "@/components/RecipeCard.vue"
import allrecipes from "@/data/recipes.json"

const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {
		RecipeCard,
		allrecipes
	}
})
export default class Recipes extends AppProps {
	data() {
		return {
			recipes: allrecipes
		}
	}
}
</script>
