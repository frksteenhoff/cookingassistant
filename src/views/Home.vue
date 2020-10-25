<template>
	<div class="home">
		<b-carousel
			id="carousel-fade"
			style="text-shadow: 0px 0px 2px #000"
			fade
			indicators
			:interval="2000"
			img-width="768"
			img-height="360"
		>
			<b-carousel-slide caption="Jordbærtærte" text="Opskrifter til alle anledninger" :img-src="require('@/assets/carousel/jordbaertaerte.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Lemon meringue pie" text="Find både brød, kager og andre søde sager" :img-src="require('@/assets/carousel/front.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Lemon meringue pie" text="Prøv kræfter med lækre, asiatiske retter" :img-src="require('@/assets/carousel/bao_fyldt2.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Pasta" text="Prøv noget nyt, eller lav en kending" :img-src="require('@/assets/carousel/pasta_sliced.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Gulerodsmuffins" text="Svampede muffins med en lækker ostecreme" :img-src="require('@/assets/carousel/gulerodsmuffins.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Ciabatta" text="Prøv noget nyt, eller lav en kending" :img-src="require('@/assets/carousel/ciabatta.jpg')"></b-carousel-slide>
			<b-carousel-slide caption="Kanelsnurrer" text="Hvis der er noget der mangler, så sig endelig til" :img-src="require('@/assets/carousel/kanelsnurrer.jpg')"></b-carousel-slide>
		</b-carousel>
	<Section
		header="Madglæde"
		:content="welcomList.join('*')"
	/>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import Section from "@/components/BaseComponents/Section.vue"

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
			src: "@/assets/carousel/jordbaertaerte.jpg"
		},
		{
			caption: "Lemon meringue pie",
			src: "@/assets/carousel/front.jpg"
		},
		{
			caption: "Kanelsnurrer",
			src: "@/assets/carousel/kanelsnurrer.png"
		}
	]

	welcomList: string[] = [
		"Velkommen til!",
		"På denne side findes der et bredt udvalg af de opskrifter, som jeg benytter meget i hverdagen og som jeg synes er så gode, at de burde deles med verden -- eller hvertfald Danmark.",
		"Min idé med disse opskrifter er at give en kort og præcis beskrivelse af ingredienser og fremgangsmåder samt at undgå for meget sniksnak og lange beskrivende tekster (bortset fra denne).",
		"Alle opskrifter kan ganges op i størrelse og jeg udvider løbende siden med ny funktionalitet. Sammen med opskrifterne er der også en enhedsoversætter, så du nemt kan oversætte enheder fra en måleenhed til en anden.",
		"Nogle opskrifter er stærkt inspireret af opskrifter jeg har fundet på nettet. Her har jeg linket til originalen i den pågældende opskrift. Disse opskrifter har jeg som oftest forfinet lidt/ændret lidt i mængder eller ingredienser fra originalen.",
		"Jeg håber du finder noget du kan lide!",
		"Jeg er hverken fotograf, eller designer, men jeg er softwareingeniør. Billederne du finder her har jeg selv taget og design og udvikling af denne side er mit hobbyprojekt. Skulle du opleve fejl eller mangler på siden, at noget der ikke er beskrevet godt nok, eller har du nogle gode idéer til hvordan siden kunne gøres bedre, er du mere end velkommen til at kontakte mig på en af medierne angivet nedenunder."
	]
}
</script>

<style>
	#carousel-fade div p {
		color: white !important;
	}
</style>
