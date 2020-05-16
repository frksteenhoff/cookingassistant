<template>
	<div class="home">
		<img alt="Landing page Logo" src="../assets/front.jpg" style="margin-bottom: 20px;" />
		<Section
			header="Madglæde"
			content="Velkommen til!*På denne side findes der et bredt udvalg af de opskrifter, som jeg benytter meget i hverdagen og som jeg synes er så gode, at de burde deles med verden -- eller hvertfald Danmark.*Min idé med disse opskrifter er at give en kort og præcis beskrivelse af ingredienser og fremgangsmåder samt at undgå for meget sniksnak og lange beskrivende tekster. Alle opskrifter kan ganges op i størrelse og jeg udvider løbende siden med ny funktionalitet.*Sammen med opskrifterne er der også en enhedsoversætter, så du nemt kan oversætte enheder fra en måleenhed til en anden. Der er mulighed både for at bruge nogle predefinerede oversættelser og at bygge din egen oversætte, hvis der ikke lige skulle være, det du havde behov for. Find den under 'enhedsoversætter' i menuen.*Nogle opskrifter er stærkt inspireret af opskrifter jeg har fundet på nettet. Her har jeg linket til originalen i den pågældende opskrift. Disse opskrifter har jeg som oftest forfinet lidt/ændret lidt i mængder ellr ingredienser fra originalen.*Jeg håber du finder noget du kan lide!*Skulle du opleve fejl eller mangler på siden, hvis der er noget der ikke er beskrevet godt nok, eller har du nogle gode idéer til, hvordan siden kunne gøres bedre, er du mere end velkommen til at kotakte mig på en af medierne angivet nedenunder." />
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
