<template>
	<b-row v-if="recipe.additionalImages" class="mt-3 mb-5">
		<b-col cols="12">
			<RecipeHeader
				title="Billeder"
			/>
		</b-col>
		<b-col v-for="(image, index) in recipe.additionalImages" :key="image" cols="12" sm="6" md="4" lg="3" class="p-0 font-italic">
			<img @click="$bvModal.show('show-extra-image-modal' + index)" class="p-3" :src="getAdditionalImage(index)" />
			<!-- modal for enlarging image -->
			<b-modal
				:id="'show-extra-image-modal' + index"
				:title="recipe.name"
				button-size="sm"
				header-text-variant="light"
				modal-footer-visible="hide"
				ok-title="Luk"
				variant="secondary"
				ok-only
				no-stacking
			>
				<b-img :src="getAdditionalImage(index)"></b-img>
			</b-modal>
		</b-col>
	</b-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import RecipeHeader from "@/components/BaseComponents/RecipeHeader.vue"

import LoadImage from "@/plugin/mixin/loadImage"

@Component({
	mixins: [
		LoadImage
	],
	components: {
		RecipeHeader
	}
})
export default class RecipeImages extends Vue {
	recipe!: RecipeObject;
}
</script>
