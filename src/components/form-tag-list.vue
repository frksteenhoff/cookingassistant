<template>
	<div>
		<b-form-group label="Relaterede emner">
			<!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
			<b-form-tags v-model="value" size="lg" add-on-change no-outer-focus>
				<template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
					<ul v-if="tags.length > 0" class="list-inline d-inline-block mb-1">
						<li v-for="tag in tags" :key="tag" class="list-inline-item">
							<b-form-tag
								@remove="removeTag(tag)"
								:title="tag"
								:disabled="disabled"
								variant="secondary"
								size="sm"
								class="m"
							>{{ tag }}</b-form-tag>
						</li>
					</ul>
					<b-form-select
						v-bind="inputAttrs"
						v-on="inputHandlers"
						:disabled="disabled || availableOptions.length === 0"
						:options="availableOptions"
					>
						<template v-slot:first>
							<!-- This is required to prevent bugs with Safari -->
							<option disabled value>Vælg relatedere tags...</option>
						</template>
					</b-form-select>
				</template>
			</b-form-tags>
		</b-form-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: []
		}
	},

	computed: {
		availableOptions() {
			return this.$store.state.tags
		}
	}
}
</script>
