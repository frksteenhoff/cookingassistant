<template>
	<div>
		<b-form-group label="Relaterede emner">
			<!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
			<b-form-tags v-model="value" size="lg" add-on-change no-outer-focus>
				<template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
					<b-form-select
						v-bind="inputAttrs"
						v-on="inputHandlers"
						:disabled="disabled || availableOptions.length === 0"
						:options="availableOptions"
						class="mb-2"
						@input="updateTags(tags)"
					>
						<template v-slot:first>
							<!-- This is required to prevent bugs with Safari -->
							<option disabled value>Vælg relatedere tags...</option>
						</template>
					</b-form-select>
					<ul v-if="tags.length > 0" class="list-inline d-inline-block mb-0">
						<li v-for="tag in tags" :key="tag" class="list-inline-item m-0">
							<b-form-tag
								:title="tag"
								:disabled="disabled"
								variant="secondary"
								size="sm"
								class="m-1"
								@remove="removeTag(tag)"
							>{{ tag }}</b-form-tag>
						</li>
					</ul>
				</template>
			</b-form-tags>
		</b-form-group>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({})
export default class FormTagList extends AppProps {
	value = []

	updateTags(tags: string[]) {
		this.$store.dispatch("setCreateTags", tags)
	}

	get availableOptions() {
		return this.$store.state.tags
	}
}
</script>
