<template>
	<div>
		<b-row>
			<b-col cols="12" class="mt-3">
				<h1 class="ml-4 mt-4">Opret opskrift</h1>
			</b-col>
			<b-col class="mt-4">
				<p>Her kan du oprette en opskrift og sende den til godkendelse af mig. Hvis jeg synes om opskriften bliver den en del af "læseropskrifter", når jeg har fået samlet et par stykker sammen.</p>
			</b-col>
		</b-row>
		<b-row class="m-2">
			<b-col cols="12" md="8">
				<b-row>
					<b-col cols="12">
						Overordnet
					</b-col>
					<b-col cols="12">
						<small>Titel</small>
						<b-form-input
							v-model="recipe.name"
						/>
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
						<b-form-input
							v-model="recipe.preparationtime"
							type="text"
							size="sm"
						/>
					</b-col>
					<b-col cols="6">
						<small>Antal serveringer</small>
						<b-form-input
							v-model="recipe.servings"
							type="text"
							size="sm"
						/>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12">
						Ingredienser
					</b-col>
				</b-row>
				<b-row v-for="(ing, index) in recipe.ingredients" :key="ing+index">
					<b-col cols="12" sm="4" md="4">
						<small>Mængde</small>
						<b-form-input
							v-model="ing.amount"
							type="number"
						/>
					</b-col>
					<b-col cols="12" sm="3" md="3">
						<small>Enhed</small>
						<b-form-select
							v-model="ing.unit"
							:options="$store.state.units"
						/>
					</b-col>
					<b-col cols="12" sm="4" md="4">
						<small>Ingrediens</small>
						<b-form-input
							v-model="ing.ingredient"
							type="text"
						/>
					</b-col>
					<b-col cols="1" class="mt-4 ml-0 pl-0 pt-2" @click="deleteRow(index)">
							<b-icon v-b-tooltip.hover title="Slet linje" icon="x-circle"></b-icon>
					</b-col>
				</b-row>
				<b-row class="mt-4 mb-4">
					<b-col>
						<b-button
							variant="outline-secondary"
							@click="addIngredient()"
						>
							Tilføj række
						</b-button>
					</b-col>
				</b-row>
			</b-col>
			<b-col cols="12" md="3" class="p-3 d-sm-none d-md-none d-lg-block">
				<div class="p-3 sticky-column" style="background-color: #eaddda">
					Oversæt enheder her
					<div v-for="combination in combinations" :key="combination.from + combination.to">
						<Conversion
							:fromUnit="combination.from"
							:toUnit="combination.to"
							size="sm"
						/>
					</div>
				</div>
			</b-col>
		</b-row>
		<b-row class="m-2">
			<b-col cols="12">
				Fremgangsmåde
			</b-col>
		</b-row>
		<b-row v-for="(step, index) in recipe.steps" :key="index" class="m-2">
			<b-col cols="11" md="8">
				<small>Step {{ index + 1 }}</small>
				<b-textarea
					v-model="recipe.steps[index]"
					placeholder="Beskriv hvordan retten tilberedes"
					size="sm"
				/>
			</b-col>
			<b-col cols="1" class="mt-4 ml-0 pl-0 pt-3" @click="deleteStep(index)">
					<b-icon v-b-tooltip.hover title="Slet linje" icon="x-circle"></b-icon>
			</b-col>
		</b-row>
		<b-row class="m-2 mt-4 mb-4">
			<b-col>
				<b-button
					variant="outline-secondary"
					@click="addStep()"
				>
					Tilføj step
				</b-button>
			</b-col>
		</b-row>
		<b-row class="m-2 mb-0">
			<b-col cols="12" md="8">
				<form-tag />
			</b-col>
		</b-row>
		<b-row class="m-2 mb-5">
			<b-button
				variant="info"
				class="ml-3 mt-4"
			>
				<a :href="'mailto:' + mailingInfo.email + '?subject='+ mailingInfo.subject + '&body=' + mailingInfo.body" target="_blank">Indsend opskrift</a>
			</b-button>
		</b-row>
		<b-row v-if="troubleshoot" class="ml-2 mt-5 mb-5">
			<b-col cols="12" class="mb-4">
				<b-button v-b-toggle="'collapse-2'" variant="outline-secondary" class="m-1">Forhåndsvisning af opskrift</b-button>
				<b-collapse id="collapse-2">
					<b-card>
						{{ JSON.stringify(recipe, undefined, 4) }}
						<br><br>
						Tags: {{ $store.getters.getCreateTags }}
					</b-card>
				</b-collapse>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import FormTag from "@/components/form-tag-list.vue"
import Conversion from "@/components/Conversion.vue"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({
	components: {
		Vue,
		FormTag,
		Conversion
	}
})
export default class RecipeForm extends AppProps {
	troubleshoot = true
	recipe: RecipeObject = {
		name: "",
		teaser: "",
		image: "",
		ingredients: [
			{
				amount: "",
				unit: "",
				ingredient: "f.eks hvedemel"
			},
			{
				amount: "",
				unit: "",
				ingredient: "f.eks vand"
			},
			{
				amount: "",
				unit: "",
				ingredient: "f.eks salt"
			}
		],
		steps: ["", "", ""],
		path: "description", // default
		servings: "",
		preparationtime: "",
		categories: [],
		relatedrecipes: [],
		inspirationlink: ""
	}

	combinations: ConversionObject[] = [
		{
			from: "fahrenheit",
			to: "celsius"
		},
		{
			from: "cups",
			to: "deciliter"
		},
		{
			from: "ounces",
			to: "gram"
		}
	]

	addIngredient() {
		this.recipe.ingredients.push({
			amount: "",
			unit: "",
			ingredient: ""
		})
	}

	get mailingInfo(): MailToObject {
		return {
			email: "henriette.steenhoff@gmail.com",
			subject: encodeURI("Nyt forslag til opskrift: " + this.recipe.name),
			body: "Jeg har brugt din hjemmeside til at generere denne opskrift, som du gerne må tage et kig på: " + encodeURI(JSON.stringify(this.recipe))
		}
	}

	updated() {
		this.recipe.categories = this.$store.getters.getCreateTags
	}

	addStep() {
		this.recipe.steps.push("")
	}

	deleteStep(index: number) {
		this.recipe.steps.splice(index, 1)
	}

	deleteRow(index: number) {
		this.recipe.ingredients.splice(index, 1)
	}
}
</script>

<style scoped>
svg:hover{
	color: red !important;
	cursor: grab;
}
button a {
	color: white !important;
}

div .sticky-column {
	position: -webkit-sticky !important;
	position: sticky !important;
	top: 65px !important; /* height of navbar + 5px */
}
</style>
