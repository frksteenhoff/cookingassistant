<template>
	<b-container>
		<b-row class="mb-3">
			<b-col>
				<h1>{{ header }}</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<p>{{ content }}</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Section extends Vue {
	@Prop() private header!: string;
	@Prop() private content!: string;
}
</script>
