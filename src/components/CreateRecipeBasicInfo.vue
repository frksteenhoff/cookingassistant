<template>
	<div>
		<b-row>
			<b-col cols="12">
				<h5>Overordnet</h5>
			</b-col>
			<b-col cols="12">
				<small>Titel</small>
				<b-form-input v-model="recipe.name" />
			</b-col>
			<b-col cols="12">
				<small>Kort beskrivelse</small>
				<b-form-textarea
					v-model="recipe.teaser"
					placeholder="Giv en kort beskrivelse af din ret"
					rows="2"
					max-rows="4"
					size="sm"
				/>
			</b-col>
		</b-row>
		<b-row class="mb-4">
			<b-col cols="6">
				<small>Tilberedningstid</small>
				<b-form-input v-model="recipe.preparationtime" type="text" size="sm" />
			</b-col>
			<b-col cols="6">
				<small>Antal serveringer</small>
				<b-form-input v-model="recipe.servings" type="text" size="sm" />
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
export default class CreateRecipeBasicInfo extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;
}
</script>
