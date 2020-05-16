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
import excelrecipes from "@/data/recipes.json"
import formrecipes from "@/data/formRecipes.json"

const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {
		RecipeCard
	}
})
export default class Recipes extends AppProps {
	recipes: RecipeObject[] = excelrecipes.concat(formrecipes)
}
</script>
