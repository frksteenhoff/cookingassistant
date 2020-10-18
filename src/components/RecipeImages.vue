<template>
	<b-row v-if="recipe.additionalImages && recipe.additionalImages.length > 0" class="mt-3 mb-5">
		<b-col cols="12">
			<RecipeHeader
				title="Billeder"
			/>
		</b-col>
		<b-col v-for="(image, index) in recipe.additionalImages" :key="image" cols="12" sm="6" md="4" lg="3" class="p-0 font-italic">
			<img @click="$bvModal.show('show-extra-image-modal' + index)" class="p-3" :src="getAdditionalImage(index)" />
			<!-- modal for enlarging image -->
			<ImageModal
				:id="'show-extra-image-modal' + index"
				:title="recipe.name"
			>
				<b-img :src="getAdditionalImage(index)"></b-img>
			</ImageModal>
		</b-col>
	</b-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import RecipeHeader from "@/components/BaseComponents/RecipeHeader.vue"
import ImageModal from "@/components/BaseComponents/ImageModal.vue"
import LoadImage from "@/plugin/mixin/loadImage"

@Component({
	mixins: [
		LoadImage
	],
	components: {
		RecipeHeader,
		ImageModal
	}
})
export default class RecipeImages extends Vue {
	recipe!: RecipeObject;
}
</script>
