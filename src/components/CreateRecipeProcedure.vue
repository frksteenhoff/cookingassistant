<template>
	<div>
		<b-row class="m-2 mt-4">
			<b-col cols="6">
				<h5>Fremgangsmåde</h5>
			</b-col>
			<b-col cols="auto">
				<b-button
					variant="outline-secondary"
					@click="addStep()"
				>
					<b-icon icon="plus" /> Tilføj step
				</b-button>
			</b-col>
		</b-row>
		<b-row v-for="(step, index) in recipe.steps" :key="index" class="m-2">
			<b-col cols="11" md="8">
				<small>Step {{ index + 1 }}</small>
				<b-textarea
					v-model="recipe.steps[index]"
					placeholder="Beskriv hvordan retten tilberedes step"
					size="sm"
				/>
			</b-col>
			<b-col cols="1" class="mt-4 ml-0 pl-0 pt-3" @click="deleteStep(index[0])">
				<b-icon v-b-tooltip.hover title="Slet linje" icon="x-circle"></b-icon>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
export default class CreateRecipeProcedure extends Vue {
	@Prop({ required: true }) recipe!: RecipeObject;

	deleteStep(index: number) {
		this.$root.$emit("delete-step", index)
	}

	addStep() {
		this.$root.$emit("add-step")
	}
}
</script>
