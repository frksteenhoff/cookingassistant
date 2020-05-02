<template>
	<b-container>
		<Recipe />
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Recipe from "@/components/Recipe.vue"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({
	components: {
		Recipe
	}
})
export default class RecipeDescription extends AppProps {
}
</script>
