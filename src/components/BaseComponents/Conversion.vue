<template>
	<div>
		<b-row class="m-2">
			<b-col cols="12" class="p-0">
				<h2 class="pl-0 mt-4">{{ capitalize(fromUnit) }} til {{ capitalize(toUnit) }}</h2>
			</b-col>
		</b-row>
		<b-row class="m-2">
			<b-col cols="12" md="5" class="p-0">
				<b-form-input
					v-model="unit"
					type="number"
					:size="size"
					:placeholder="`${measurementType} i ${fromUnit}`"
				/>
				{{ fromUnit }}
			</b-col>
			<b-col cols="12" md="7" class="mt-1 p-0 pl-3 align-self-start">
				<p class="mb-1 ml-0 p-0 text-center text-md-left" v-html="conversion(fromUnit, toUnit) + ' ' + unitSymbol[toUnit]" />
				{{ toUnit }}
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
		fromUnit: {
			type: String,
			required: true
		},
		toUnit: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: "md"
		}
	}
})

@Component({})
export default class Conversion extends AppProps {
	unit = 0

	conversionRate = {
		fahrenheit: {
			celsius: (this.unit - 32) / 1.8,
			kelvin: ((this.unit + 459.67) * 5) / 9
		}
	};

	unitSymbol = {
		celsius: "&deg;C",
		fahrenheit: "&deg;F",
		deciliter: "dl",
		milliliter: "ml",
		gram: "g"
	};

	conversion(from: string, to: string) {
		let result = 0
		switch (from) {
		case "fahrenheit":
			result =
				to === "celsius"
					? (this.unit - 32) / 1.8
					: ((this.unit + 459.67) * 5) / 9
			break
		case "cups":
			result = this.unit * 2.36588237
			break
		case "ounces":
			result = this.unit * 28.35
			break
		default:
			result = 0
		}
		return result.toFixed(2)
	}

	capitalize(word: string) {
		return word[0].toUpperCase() + word.slice(1).toLowerCase()
	}

	get measurementType() {
		return this.fromUnit === "fahrenheit" ? "Temperature" : "Volume"
	}
}
</script>
