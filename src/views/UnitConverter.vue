<template>
	<b-container class="mt-3">
		<b-row>
			<b-col cols="12">
				<h1 class="m-0">Ofte brugte konverteringer</h1>
			</b-col>
		</b-row>
		<div v-for="combination in combinations" :key="combination.from+combination.to">
			<Conversion :fromUnit="combination.from" :toUnit="combination.to" />
		</div>
		<b-row v-if="conversionReady">
			<b-col cols="12" class="mt-5">
				<h1 class="m-0">Byg-selv-enhedskonvertering</h1>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Conversion from "@/components/Conversion.vue"

const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {
		Conversion
	}
})
export default class UnitConverter extends AppProps {
	conversionReady = false
	combinations: ConversionObject[] = [
		{
			from: "fahrenheit",
			to: "celsius"
		},
		{
			from: "cups",
			to: "deciliter"
		},
		{
			from: "ounces",
			to: "grams"
		}
	]
}
</script>
