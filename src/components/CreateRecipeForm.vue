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
				<CreateRecipeBasicInfo :recipe="recipe" />
				<CreateRecipeIngredientsList :recipe="recipe" />
			</b-col>
			<b-col cols="12" md="3" class="p-3 d-sm-none d-md-none d-lg-block">
				<ConversionSidebar :combinations="combinations" />
			</b-col>
		</b-row>
		<CreateRecipeProcedure :recipe="recipe" />
		<b-row class="m-2 mb-0">
			<b-col cols="12" md="8">
				<form-tag />
			</b-col>
		</b-row>
		<b-row v-if="troubleshoot" class="ml-2 mt-3">
			<b-col cols="12">
				<b-button v-b-toggle="'collapse-2'" variant="outline-secondary" class="m-1">
					Forhåndsvisning af opskrift
				</b-button>
				<b-collapse id="collapse-2">
					<b-card>
						{{ JSON.stringify(recipe, undefined, 4) }}
						<br><br>
						Tags: {{ $store.getters.getCreateTags }}
					</b-card>
				</b-collapse>
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
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import FormTag from "@/components/form-tag-list.vue"
import ConversionSidebar from "@/components/ConversionSidebar.vue"
import CreateRecipeBasicInfo from "@/components/CreateRecipeBasicInfo.vue"
import CreateRecipeProcedure from "@/components/CreateRecipeProcedure.vue"
import CreateRecipeIngredientsList from "@/components/CreateRecipeIngredientsList.vue"

@Component({
	components: {
		Vue,
		FormTag,
		ConversionSidebar,
		CreateRecipeBasicInfo,
		CreateRecipeProcedure,
		CreateRecipeIngredientsList
	}
})
export default class CreateRecipeForm extends Vue {
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
		preparationtime: {
			active: "",
			passive: ""
		},
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

	created() {
		this.$root.$on("delete-ingredient", this.deleteRow)
		this.$root.$on("delete-step", this.deleteStep)
		this.$root.$on("add-step", this.addStep)
		this.$root.$on("add-ingredient", this.addIngredient)
	}

	updated() {
		this.recipe.categories = this.$store.getters.getCreateTags
	}

	beforeDestroy() {
		this.$off("delete-ingredient")
		this.$off("delete-step")
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
