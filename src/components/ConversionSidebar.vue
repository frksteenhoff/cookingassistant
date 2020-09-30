<template>
	<div class="p-3 sticky-column" style="background-color: #eaddda">
		Oversæt enheder her
		<div v-for="combination in combinations" :key="combination.from + combination.to">
			<Conversion :fromUnit="combination.from" :toUnit="combination.to" size="sm" />
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"
import Conversion from "@/components/BaseComponents/Conversion.vue"

@Component({
	components: {
		Conversion
	}
})
export default class CreateRecipeProcedure extends Vue {
	@Prop({ required: true }) combinations!: ConversionObject;
}
</script>

<style>
	.sticky-column {
		border-radius: 4px !important;
	}
</style>
