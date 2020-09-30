<template>
	<b-container>
		<CreateRecipeForm />
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import CreateRecipeForm from "@/components/CreateRecipeForm.vue"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({
	components: {
		CreateRecipeForm
	}
})
export default class CreateRecipe extends AppProps {
}
</script>
