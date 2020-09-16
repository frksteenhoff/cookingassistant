<template>
	<div>
		<div class="ingredients pl-3 pt-3 pb-2 pr-3">
			<h3 class="ingredients-header">Ingredienser</h3>
			<ul v-for="(item, index) in recipe.ingredients" :key="item.amount + item.unit + item.ingredient + index" class="mt-4">
				<li>
					{{ !item.amount ? "" : (Number(item.amount) * numberOfPortions) + " " + item.unit + " " + item.ingredient }}
				</li>
			</ul>
		</div>
		<RelatedRecipeList
			:recipe="recipe"
			class="d-sm-none"
		/>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

import RelatedRecipeList from "@/components/BaseComponents/RelatedRecipeList.vue"

@Component({
	components: {
		RelatedRecipeList
	}
})
export default class IngredientsList extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;
	@Prop({ required: true }) numberOfPortions!: number;
}
</script>

<style scoped>
p, li {
	font-size: 1rem;
	color: #000;
}

.ingredients {
	background: lightgray;
}

.ingredients-header {
	color: #000 !important;
}

</style>
