<template>
	<b-card
		:title="name"
		:img-src="getImage()"
		:img-alt="name"
		img-top
		class="mb-4"
		@click="handleCardClick"
	>
		<b-card-text
			class="mb-2 ml-0 mr-0 p-0"
			style="font-size: 1rem;"
		>
			{{ teaser }}
		</b-card-text>
	</b-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
		name: {
			type: String,
			required: true
		},
		teaser: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		path: {
			type: String,
			required: true
		},
		ingredients: {
			type: Array,
			required: true
		},
		steps: {
			type: Array,
			required: true
		},
		inspirationlink: {
			type: String,
			required: true
		}
	}
})

@Component({})
export default class RecipeCard extends AppProps {
	handleCardClick() {
		this.$store.dispatch("setRecipe", {
			name: this.name,
			teaser: this.teaser,
			image: this.image,
			path: this.path,
			ingredients: this.ingredients,
			steps: this.steps,
			inspirationlink: this.inspirationlink
		})
		this.$router.push({ name: this.path })
	}

	getImage() {
		return this.image === "NaN" || !this.image ? require("../assets/logo.png") : require("../assets/recipes/" + this.image)
	}
}
</script>
