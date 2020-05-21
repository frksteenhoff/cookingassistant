<template>
	<div class="home">
		<b-carousel
			id="carousel-fade"
			style="text-shadow: 0px 0px 2px #000"
			fade
			indicators
			:interval="3000"
			img-width="1024"
			img-height="480"
		>
			<b-carousel-slide caption="Jordbærtærte" :img-src="require('../assets/carousel/jordbaertaerte.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Lemon meringue pie" :img-src="require('../assets/carousel/front.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Kanelsnurrer" :img-src="require('../assets/carousel/kanelsnurrer.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Ciabatta" :img-src="require('../assets/carousel/ciabatta.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Dumplings" :img-src="require('../assets/carousel/dumplings.jpg')"></b-carousel-slide>
		</b-carousel>
	<Section
		header="Madglæde"
		content="Velkommen til!*På denne side findes der et bredt udvalg af de opskrifter, som jeg benytter meget i hverdagen og som jeg synes er så gode, at de burde deles med verden -- eller hvertfald Danmark.*Min idé med disse opskrifter er at give en kort og præcis beskrivelse af ingredienser og fremgangsmåder samt at undgå for meget sniksnak og lange beskrivende tekster. Alle opskrifter kan ganges op i størrelse og jeg udvider løbende siden med ny funktionalitet.*Sammen med opskrifterne er der også en enhedsoversætter, så du nemt kan oversætte enheder fra en måleenhed til en anden. *Nogle opskrifter er stærkt inspireret af opskrifter jeg har fundet på nettet. Her har jeg linket til originalen i den pågældende opskrift. Disse opskrifter har jeg som oftest forfinet lidt/ændret lidt i mængder ellr ingredienser fra originalen.*Jeg håber du finder noget du kan lide!*Skulle du opleve fejl eller mangler på siden, hvis der er noget der ikke er beskrevet godt nok, eller har du nogle gode idéer til, hvordan siden kunne gøres bedre, er du mere end velkommen til at kotakte mig på en af medierne angivet nedenunder."
	/>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Section from "@/components/Section.vue"

const AppProps = Vue.extend({
	props: {
	}
})
@Component({
	components: {
		Section
	}
})
export default class Home extends AppProps {
	frontImages: CarouselObject[] = [
		{
			caption: "Jordbærtærte",
			src: "../assets/carousel/jordbaertaerte.jpg"
		},
		{
			caption: "Lemon meringue pie",
			src: "../assets/carousel/front.jpg"
		},
		{
			caption: "Kanelsnurrer",
			src: "../assets/carousel/kanelsnurrer.png"
		}
	]
}
</script>
