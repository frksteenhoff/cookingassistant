import { Vue, Component } from "vue-property-decorator"

@Component({})

export default class LoadImage extends Vue {
	getImage() {
		return this.recipe.image === "NaN" || !this.recipe.image ? require("@/assets/recipes/recipe_default.jpg") : require("@/assets/recipes/" + this.recipe.image)
	}

	getAdditionalImage(index: number) {
		return require("@/assets/recipes/" + this.recipe.additionalImages[index])
	}

	get recipe() {
		return this.$store.getters.getRecipe
	}
}
