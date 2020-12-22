<template>
	<div :class="[background ? 'pro-tip-box' : '']">
		<h5 class="font-weight-bold p-0 ">
			<slot name="header">
				Tips til opskriften
			</slot>
		</h5>
		<hr>
		<slot name="body"></slot>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"

@Component({})
export default class TextBox extends Vue {
	@Prop({ default: false }) background!: boolean;
}
</script>

<style scoped>
	.pro-tip-box {
		background-color: #E8E8E8;
		color: black;
		padding: 1.5rem;
		border: 1px #E8E8E8;
		border-radius: 4px;
	}

	.pro-tip-box h5 {
		font-family: "Permanent Marker", "Roboto Light", "Roboto", "Arial", Helvetica, sans-serif;
	}
</style>
