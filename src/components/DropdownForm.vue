<template>
	<div>
		<b-form-group label="Søg efter opskrifter der indeholder et eller flere tags">
			<b-form-tags v-model="value" no-outer-focus class="mb-2">
				<template v-slot="{ tags, disabled, addTag, removeTag }">
					<b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
						<template v-slot:button-content>
							<b-icon icon="tag-fill"></b-icon>Vælg søgekriterier
						</template>
						<b-dropdown-form @submit.stop.prevent="() => {}">
							<b-form-group
								label-for="tag-search-input"
								label="Tags"
								label-cols-md="auto"
								class="mb-0"
								label-size="sm"
								:description="searchDesc"
								:disabled="disabled"
							>
								<b-form-input
									v-model="search"
									id="tag-search-input"
									type="search"
									size="sm"
									autocomplete="off"
								></b-form-input>
							</b-form-group>
						</b-dropdown-form>
						<b-dropdown-divider></b-dropdown-divider>
						{{ tags }}
						<b-dropdown-item-button
							v-for="option in availableOptions"
							:key="option"
							@click="onOptionClick({ tags, option, addTag })"
						>
							{{ option }}
						</b-dropdown-item-button>
						<b-dropdown-text v-if="availableOptions.length === 0">Der er ingen tilgængelige kriterier.</b-dropdown-text>
					</b-dropdown>

					<ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
						<li v-for="tag in tags" :key="tag" class="list-inline-item">
							<b-form-tag
								@remove="removeTag(tag);$root.$emit('recipeSearchUpdated', tags)"
								:title="tag"
								:disabled="disabled"
								variant="info"
								class="mt-3"
							>
								{{ tag }}
							</b-form-tag>
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
		availableTags: {
			type: Array,
			required: true
		}
	}
})

@Component({})
export default class DropdownForm extends AppProps {
	search = ""
	value: string[] = []
	disabled = false

	get searchDesc() {
		return this.availableOptions.length === 0 ? "Der er ingen kriterier der matcher din søgning." : ""
	}

	get criteria() {
		// Compute the search criteria
		return this.search.trim().toLowerCase()
	}

	get availableOptions() {
		const criteria = this.criteria
		// Filter out already selected options
		const options = this.availableTags.filter(
			// @ts-ignore
			opt => this.value.indexOf(opt) === -1
		)
		if (criteria) {
			// Show only options that match criteria
			return options.filter(
				// @ts-ignore
				opt => opt.toLowerCase().indexOf(criteria) > -1
			)
		}
		// Show all options available
		return options
	}

	// @ts-ignore
	onOptionClick({ option, tags, addTag }) {
		addTag(option)
		this.search = ""
		this.$root.$emit("recipeSearchUpdated", tags.concat(option))
	}
}
</script>
