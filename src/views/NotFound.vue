<template>
	<b-container class="mt-3">
		<b-row>
			<b-col cols="12">
				<h1 class="m-0">Page not found</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" class="mt-5">
				<p class="p-0 m-0">Uh oh! Page does not exist.</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {}
})

@Component({})
export default class NotFound extends AppProps {
}
</script>
