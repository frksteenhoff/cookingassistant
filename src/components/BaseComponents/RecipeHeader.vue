<template>
	<div>
		<hr>
		<h4>{{ title }}</h4>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({})
export default class RecipeHeader extends Vue {
	@Prop({ required: true }) title!: string;
}
</script>
