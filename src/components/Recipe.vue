<template>
	<div itemscope itemtype="http://schema.org/Recipe" class="mt-3">
		<b-row class="mb-4">
			<b-col cols="12">
				<h1 itemprop="name" class="ml-0">{{ recipe.name }}</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" class="mt-2 mb-3 font-italic">
				<p itemprop="description" class="pl-0 m-0">{{ recipe.teaser }}</p>
				</b-col>
		</b-row>
		<b-row>
			<b-col v-if="'categories' in recipe" cols="12" class="pl-0">
				<b-badge v-for="category in recipe.categories" :key="category" class="ml-3 mt-2 mb-2 p-1 pl-2 pr-2">
					{{ category }}
				</b-badge>
			</b-col>
		</b-row>
		<hr>
		<b-row class="text-md-center">
			<b-col cols="12" class="mt-2 mb-0">
				<PreparationsOverview
					:recipe="recipe"
				/>
			</b-col>
		</b-row>
		<b-row class="mt-lg-1 mb-sm-3">
			<b-col cols=12 md="3" order-md="3" lg="3">
				<div class="sticky-column">
					<img itemprop="image" v-b-modal.show-image-modal v-if="recipe.image" class="recipe-top-image d-md-none d-lg-block mt-3 opacity-change" :src="getImage()" />
					<TextBox v-if="('protip' in recipe && recipe.protip)" :background="true" class="mt-3 mb-4">
						<template v-slot:body>
							{{ recipe.protip }}
						</template>
					</TextBox>
					<RelatedRecipeList
						:recipe="recipe"
						class="d-sm-none d-md-block"
					/>
				</div>
			</b-col>
			<b-col cols="12" md="4" order-md="1" lg="3" order-lg="1" class="pt-sm-3">
				<IngredientsList
					:recipe="recipe"
					:number-of-portions="numberOfPortions"
					class="sticky-column"
				/>
			</b-col>
			<b-col cols="12" md="8" order-md="2" lg="6" order-lg="2" class="pb-3">
				<RecipeProcedure
					:recipe="recipe"
					class="sticky-column"
				/>
			</b-col>
		</b-row>
		<RecipeImages />
		<b-row class="mb-4">
			<b-col v-if="recipe.inspirationlink" class="p-0 font-italic">
				<hr>
				<p class="pl-3 m-0">
					Jeg har fået inspiration til min opskrift fra <a class="pl-0" :href="recipe.inspirationlink">denne opskrift</a>
				</p>
			</b-col>
		</b-row>
		<!-- modal for enlarging image -->
		<ImageModal
			id="show-image-modal"
			:title="recipe.name"
		>
			<b-img :src="getImage()"></b-img>
		</ImageModal>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator"
import RecipeHeader from "@/components/BaseComponents/RecipeHeader.vue"
import IngredientsList from "@/components/BaseComponents/IngredientsList.vue"
import PreparationsOverview from "@/components/BaseComponents/PreparationsOverview.vue"
import RecipeProcedure from "@/components/RecipeProcedure.vue"
import RecipeImages from "@/components/RecipeImages.vue"
import RelatedRecipeList from "@/components/BaseComponents/RelatedRecipeList.vue"
import ImageModal from "@/components/BaseComponents/ImageModal.vue"
import TextBox from "@/components/BaseComponents/TextBox.vue"

import LoadImage from "@/plugin/mixin/loadImage"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({
	components: {
		PreparationsOverview,
		RecipeHeader,
		IngredientsList,
		RecipeProcedure,
		RecipeImages,
		RelatedRecipeList,
		ImageModal,
		TextBox
	},
	mixins: [
		LoadImage
	]
})
export default class RecipeCard extends AppProps {
	recipe!: RecipeObject;
	numberOfPortions = 1;

	@Watch("$route.params.name")
	onProperyChanged(value: string) {
		this.$store.dispatch("setRecipe", value)
	}

	created() {
		this.$root.$on("update-portions", this.setNumberOfPortions)
		this.$store.dispatch("setRecipe", this.$route.params.name)
	}

	setNumberOfPortions(event: number) {
		this.numberOfPortions = event
	}
}
</script>

<style scoped>
p, li {
	font-size: 1rem;
	color: #000;
}

.recipe-top-image {
	border: 1px solid;
	border-radius: 5px;
	padding: 5px;
}

.sticky-column {
	position: -webkit-sticky !important;
	position: sticky !important;
	top: 65px !important; /* height of navbar + 5px */
}
</style>
