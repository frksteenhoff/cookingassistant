<template>
	<div>
		<b-row class="m-2">
			<b-col class="p-0" cols="9">
				<b-form-input
					v-model="equation"
					placeholder="Lav en udregning"
				/>
			</b-col>
			<b-col v-for="idx in buttonContent" :key="idx+'id'" cols="3" class="p-0 m-2">
				<b-button>
					{{ idx }}
				</b-button>
			</b-col>
		</b-row>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({})
export default class Calculator extends AppProps {
	idx = 0;
	equation = ""

	get buttonContent() {
		return Array(9).fill(1).map((x, y) => x + y).concat(["ESC", "0", ".", "*", "/", "+", "-"])
	}
}
</script>
