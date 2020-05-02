<template>
	<div>
		<b-row class="mb-4">
			<b-col cols="12">
				<h1 class="ml-0">{{ recipe.name }}</h1>
			</b-col>
		</b-row>
		<b-row class="mb-3">
			<b-col cols="12" md="6" order-md="2">
				<img :src="require('../assets/recipes/' + recipe.image)" />
			</b-col>
			<b-col cols="12" md="6" order-md="1">
				<div class="mb-3 font-italic">{{ recipe.teaser }}</div>
				<b-row class="mt-5" style="border-style: 1px black;">
					<b-col cols="12" class="mb-3">
						<h3>Ingredienser</h3>
					</b-col>
				</b-row>
				<ul v-for="item in recipe.ingredients" :key="item.ingredient" class="mb-3">
					<li>
						{{ item.amount + item.unit + " " + item.ingredient }}
					</li>
				</ul>
				<b-row class="mt-5">
					<b-col cols="12" class="mb-3">
						<h3>Procedure</h3>
					</b-col>
				</b-row>
				<ul v-for="step in recipe.steps" :key="step" class="mb-3">
					<li>
						{{ step }}
					</li>
				</ul>
				<b-row class="mt-5">
					<b-col v-if="recipe.inspirationlink" class="font-italic">
						Jeg har fået inspiration til min opskrift fra <a :href="recipe.inspirationlink">denne opskrift</a>
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
			recipe: {}
		}
	}

	created() {
		this.recipe = this.$store.state.recipe
	}
}
</script>
