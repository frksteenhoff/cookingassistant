<template>
	<b-container>
		<RecipeForm />
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import RecipeForm from "@/components/RecipeForm.vue"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({
	components: {
		RecipeForm
	}
})
export default class CreateRecipe extends AppProps {
}
</script>
