<template>
	<b-modal
		:id="id"
		:title="title"
		button-size="sm"
		size="lg"
		hide-footer
		ok-title="Luk"
		ok-only
		no-stacking
	>
		<slot></slot>
	</b-modal>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
export default class RecipeProcedure extends Vue {
	@Prop({ required: true }) id!: string;
	@Prop({ required: true }) title!: string;
}
</script>
