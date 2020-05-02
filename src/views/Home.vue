<template>
	<div class="home">
		<img alt="Landing page Logo" src="../assets/front.jpg" style="margin-bottom: 20px;" />
		<Section
			header="Madglæde"
			content="Velkommen til!" />
	</div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/Section.vue"

export default {
	name: "Home",
	components: {
		Section
	}
}
</script>
