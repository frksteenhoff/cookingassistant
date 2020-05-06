<template>
	<div class="mt-3">
		<b-row class="mb-4">
			<b-col cols="12">
				<h1 class="ml-0">{{ recipe.name }}</h1>
			</b-col>
		</b-row>
		<b-row class="mb-3">
			<b-col cols="12" md="4" order-md="2">
				<img style="border:1px solid; border-radius: 5px; padding: 5px;" :src="getImage()" />
			</b-col>
			<b-col cols="12" md="8" order-md="1">
				<div class="mt-3 mb-3 font-italic"><p class="pl-0 m-0">{{ recipe.teaser }}</p></div>
				<b-row class="mt-5" style="border-style: 1px black;">
					<b-col cols="12" class="mb-3">
						<h3>Ingredienser</h3>
					</b-col>
				</b-row>
				<b-row class="mb-2">
					<b-col cols="12" class="mb-2">
						Antal/serveringer: {{ recipe.servings }}
					</b-col>
					<b-col cols="4">
						<b-form-select
							v-model="numberOfPortions"
							:options="Array(10).fill(1).map((x, y) => x + y)"
						/>
					</b-col>
				</b-row>
				<ul v-for="item in recipe.ingredients" :key="item.ingredient" class="mb-3">
					<li>
						{{ (Number(item.amount) * numberOfPortions) + " " + item.unit + " " + item.ingredient }}
					</li>
				</ul>
				<b-row class="mt-5">
					<b-col cols="12" class="mb-3">
						<h3>Procedure</h3>
					</b-col>
				</b-row>
				<ul v-for="step in recipe.steps" :key="step" class="mb-3">
					<li class="ml-0">
						{{ step }}
					</li>
				</ul>
				<b-row class="mt-5 mb-3">
					<b-col v-if="recipe.inspirationlink" class="p-0 font-italic">
						<p class="pl-3 m-0">Jeg har fået inspiration til min opskrift fra <a class="pl-0" :href="recipe.inspirationlink">denne opskrift</a></p>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({})
export default class RecipeCard extends AppProps {
	data() {
		return {
			recipe: {},
			numberOfPortions: null
		}
	}

	created() {
		this.recipe = this.$store.state.recipe
		this.numberOfPortions = 1
	}

	getImage() {
		return this.recipe.image === "NaN" || !this.recipe.image ? require("../assets/logo.png") : require("../assets/recipes/" + this.recipe.image)
	}
}
</script>

<style scoped>
p, li {
	font-size: 0.8rem;
	color: black !important;
}
</style>
