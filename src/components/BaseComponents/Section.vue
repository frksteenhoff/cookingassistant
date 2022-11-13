<template>
	<b-container>
		<b-row class="mt-3 mb-3">
			<b-col>
				<h1 class="ml-3 text-break">{{ header }}</h1>
			</b-col>
		</b-row>
		<b-row class="mb-3">
			<b-col cols="12" v-for="section in content.split('*')" :key="section">
				<p>{{ section }}</p>
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
