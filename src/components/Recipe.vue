<template>
	<div class="mt-3">
		<b-row class="mb-4">
			<b-col cols="12">
				<h1 class="ml-0">{{ recipe.name }}</h1>
			</b-col>
		</b-row>
		<b-row class="mb-3">
			<b-col cols="12" md="6" order-md="2" lg="4" order-lg="3">
				<img style="border:1px solid; border-radius: 5px; padding: 5px;" :src="getImage()" />
				<div v-if="'relatedrecipes' in recipe">
					<h5 class="pl-0 mt-3">Relaterede opskrifter:</h5>
					<p v-for="recipe in recipe.relatedrecipes" :key="recipe" class="pl-0 mt-3">
						<router-link :to="{ name: 'recipe', params: { name: recipe }}">{{ recipe }}</router-link>
					</p>
				</div>
			</b-col>
			<b-col cols="12" md="6" order-md="1" lg="4" order-lg="1">
				<b-row>
					<b-col cols="12" class="mt-3 mb-3 font-italic"><p class="pl-0 m-0">{{ recipe.teaser }}</p></b-col>
				</b-row>
				<b-row>
					<b-col v-if="'categories' in recipe" cols="12" class="ml-3 pl-0">
						<b-badge v-for="category in recipe.categories" :key="category" class="mt-2 mr-2 p-1">
							{{ category }}
						</b-badge>
					</b-col>
				</b-row>
				<b-row class="mt-3" style="border-style: 1px black;">
					<b-col cols="12" class="mb-3">
						<h3>Ingredienser</h3>
					</b-col>
					<b-col cols="12" class="mb-2 mt-2">
						Antal/serveringer: {{ recipe.servings }}
					</b-col>
					<b-col v-if="'preparationtime' in recipe" cols="12" class="mb-4">
						Tilberedningstid: {{ recipe.preparationtime }}
					</b-col>
				</b-row>
				<b-row class="mb-2">
					<b-col cols="4" class="mb-2">
						<b-form-select
							v-model="numberOfPortions"
							:options="[0.5].concat(Array(10).fill(1).map((x, y) => x + y))"
						/>
					</b-col>
				</b-row>
				<ul v-for="item in recipe.ingredients" :key="item.ingredient" class="mb-3">
					<li>
						{{ (Number(item.amount) * numberOfPortions) + " " + item.unit + " " + item.ingredient }}
					</li>
				</ul>
			</b-col>
			<b-col cols=12 md="6" order-md="3" lg="4" order-lg="2" class="mt-lg-4">
				<b-row class="mt-lg-5">
					<b-col cols="12" class="mb-3 mt-lg-5">
						<h3>Procedure</h3>
					</b-col>
				</b-row>
				<ul v-for="step in recipe.steps" :key="step" class="mb-3">
					<li class="ml-0">
						{{ step }}
					</li>
				</ul>
			</b-col>
		</b-row>
		<b-row class="mt-3 mb-5">
			<b-col v-if="recipe.inspirationlink" class="p-0 font-italic">
				<p class="pl-3 m-0">Jeg har fået inspiration til min opskrift fra <a class="pl-0" :href="recipe.inspirationlink">denne opskrift</a></p>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({})
export default class RecipeCard extends AppProps {
	recipe!: RecipeObject
	numberOfPortions = 1

	created() {
		this.recipe = this.$store.state.recipe
	}

	getImage() {
		return this.recipe.image === "NaN" || !this.recipe.image ? require("../assets/logo.png") : require("../assets/recipes/" + this.recipe.image)
	}
}
</script>

<style scoped>
p, li {
	font-size: 1rem;
	color: #000;
}
</style>
