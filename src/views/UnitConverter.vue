<template>
	<b-container class="mt-3">
		<b-row>
			<b-col cols="12" class="pl-0 mb-3">
				<h1 class="m-0">Ofte brugte konverteringer</h1>
			</b-col>
		</b-row>
		<b-row class="unitconverter">
			<b-col cols="12" v-for="combination in combinations" :key="combination.from+combination.to" class="">
				<Conversion :fromUnit="combination.from" :toUnit="combination.to" />
			</b-col>
			<b-row v-if="conversionReady">
				<b-col cols="12" class="mt-5">
					<h1 class="m-0">Byg-selv-enhedskonvertering</h1>
				</b-col>
			</b-row>
			<b-row v-if="calculatorFinished" class="m-2">
				<Calculator />
			</b-row>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Conversion from "@/components/BaseComponents/Conversion.vue"
import Calculator from "@/components/Calculator.vue"

const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {
		Conversion,
		Calculator
	}
})
export default class UnitConverter extends AppProps {
	calculatorFinished = false
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
			to: "gram"
		}
	]
}
</script>

<style scoped>
.unitconverter {
	background-color: #eaddda;
}
</style>
