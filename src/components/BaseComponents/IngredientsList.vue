<template>
	<div class="ingredients pl-3 pt-3 pb-2 pr-3">
		<h3 class="ingredients-header overflow-hidden">Ingredienser</h3>
		<ul v-for="(item, index) in recipe.ingredients" :key="item.amount + item.unit + item.ingredient + index" class="mt-4">
			<li itemprop="recipeIngredient" class="overflow-hidden wrap-text text-break">
				{{ !item.amount ? "" : (Number(item.amount) * numberOfPortions) + " " + item.unit + " " + item.ingredient }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
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
	background: #f4efed;
	border: 1px #f4efed;
	border-radius: 2px;
}

.ingredients-header {
	color: #000 !important;
	font-family: "Permanent Marker";
}

</style>
