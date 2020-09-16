<template>
	<div v-if="'relatedrecipes' in recipe && recipe.relatedrecipes.length > 0">
		<h6 class="font-weight-bold pl-0 mt-3">Relaterede opskrifter</h6>
		<p v-for="recipe in recipe.relatedrecipes" :key="recipe" class="pl-0 mt-3">
			<router-link :to="{ path: `${recipe}` }">- {{ recipe }}</router-link>
		</p>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
export default class RelatedRecipeList extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;
}
</script>
