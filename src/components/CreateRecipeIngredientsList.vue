<template>
	<div>
		<b-row>
			<b-col cols="auto" class="mr-auto">
				<h5>Ingredienser</h5>
			</b-col>
			<b-col cols="auto">
				<b-button
					variant="outline-secondary"
					@click="addIngredient()"
				>
					<b-icon icon="plus" />Tilføj række
				</b-button>
			</b-col>
		</b-row>
		<b-row v-for="(ing, index) in recipe.ingredients" :key="ing+index">
			<b-col cols="12" sm="4" md="4">
				<small>Mængde</small>
				<b-form-input v-model="ing.amount" type="number" />
			</b-col>
			<b-col cols="12" sm="3" md="3">
				<small>Enhed</small>
				<b-form-select v-model="ing.unit" :options="$store.state.units" />
			</b-col>
			<b-col cols="12" sm="4" md="4">
				<small>Ingrediens</small>
				<b-form-input v-model="ing.ingredient" type="text" />
			</b-col>
			<b-col cols="1" class="mt-4 ml-0 pl-0 pt-2" @click="deleteIngredient(index[0])">
				<b-icon v-b-tooltip.hover title="Slet linje" icon="x-circle"></b-icon>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
export default class CreateRecipeIngredientsList extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;

	deleteIngredient(index: number) {
		this.$root.$emit("delete-ingredient", index)
	}

	addIngredient() {
		this.$root.$emit("add-ingredient")
	}
}
</script>
