<template>
	<div>
		<b-container class="mt-3 mb-3">
			<b-row class="m-2">
				<b-col cols="12" class="mb-3">
					<h1 class="ml-0">Madlinks</h1>
					<p class="pl-0 mt-4">Disse opskrifter bliver stille og roligt integreret på denne side med de retterser/tiføjelser som jeg har til dem. Jeg har tilføjet dem her som inspiration.</p>
				</b-col>
				<b-col cols="12" md="12" lg="4">
					<h3>Godt at vide</h3>
					<p  class="pl-0">
						<ul v-for="recipe in sortedOtherLinks" :key="recipe.name">
							<li><a :href="recipe.link" target="_blank">{{ recipe.name }}</a></li>
						</ul>
					</p>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<h3>Hovedretter</h3>
					<p class="pl-0">
						<ul v-for="recipe in sortedFoodLinks" :key="recipe.name">
							<li><a :href="recipe.link" target="_blank">{{ recipe.name }}</a></li>
						</ul>
					</p>
				</b-col>
				<b-col cols="12" md="6" lg="4">
					<h3>Desserter</h3>
					<p class="pl-0">
						<ul v-for="recipe in sortedDessertLinks" :key="recipe.name">
							<li><a :href="recipe.link" target="_blank">{{ recipe.name }}</a></li>
						</ul>
					</p>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

const AppProps = Vue.extend({
	props: {
	}
})

@Component({
	components: {
		Vue
	}
})
export default class FoodLinks extends AppProps {
	otherLinks: BasicLinkObject[] = [
		{
			name: "Meltyper",
			link: "https://madensverden.dk/meltyper/"
		}
	]

	get sortedFoodLinks() {
		return this.foodLinks.sort((a, b) => a.name.localeCompare(b.name))
	}

	get sortedDessertLinks() {
		return this.dessertLinks.sort((a, b) => a.name.localeCompare(b.name))
	}

	get sortedOtherLinks() {
		return this.otherLinks.sort((a, b) => a.name.localeCompare(b.name))
	}

	dessertLinks: BasicLinkObject[] = [
		{
			name: "Lemon meringue pie",
			link: "https://www.lurpak.com/da-dk/opskrifter-med-lurpak/lemon-meringue-taerte/"
		},
		{
			name: "Triple chocolate tart",
			link: "https://www.epicurious.com/recipes/food/views/triple-chocolate-tart-with-boozy-whipped-cream-365216"
		},
		{
			name: "Chokoladetærte med saltkaramel",
			link: "https://spisbedre.dk/opskrifter/chokoladetaerte-med-saltkaramel?utm_medium=gallery&utm_source=skedlink"
		},
		{
			name: "Plain cheesecake",
			link: "https://www.plainchicken.com/2015/01/the-best-homemade-cheesecake.html"
		},
		{
			name: "Chocolte covered cheesecake bites",
			link: "https://www.cookingpanda.com/content/get-recipe-cheesecake-bites"
		},
		{
			name: "Key lime cheesecake",
			link: "https://bakerbynature.com/key-lime-cheesecake/"
		},
		{
			name: "Creme linser",
			link: "https://www.metteblomsterberg.dk/opskrifter/smoerbagte-cremelinser"
		},
		{
			name: "Raspberry pavlova",
			link: "http://www.redonline.co.uk/food/best-recipes/best-easy-dinner-party-dessert-recipes#image=25"
		},
		{
			name: "Pavlova",
			link: "https://www.dansukker.dk/dk/inspiration/aret-rundt/sommer/sommerdesserter.aspx "
		},
		{
			name: "Lagkage på chokolade og hindbær mousse",
			link: "https://www.femina.dk/mad/desserter/lagkage-paa-kiksebund-med-maelkechokolademousse-og-hindbaermousse"
		},
		{
			name: "Chokoladekage med kaffemousse",
			link: "https://www.femina.dk/mad/desserter/chokoladekage-med-kaffemousse"
		},
		{
			name: "Brownies",
			link: "https://www.alt.dk/mad/opskrift/brownie"
		},
		{
			name: "Crumble cake",
			link: "https://www.marthastewart.com/1162570/black-raspberry-crumb-cake"
		},
		{
			name: "Chokolademoussekage",
			link: "https://www.femina.dk/mad/desserter/chokolademousse-kage-med-troeffelpynt"
		},
		{
			name: "Passionsmousse med marengs",
			link: "https://www.femina.dk/mad/desserter/passionsmousse-med-marengs"
		},
		{
			name: "Jordbær chokolademousse tårn",
			link: "https://bageglad.dk/jordbaer-chokolademousse-tarn/"
		},
		{
			name: "Chokolademousse",
			link: "https://www.louiogbearnaisen.dk/2017/01/chokolademousse.html"
		},
		{
			name: "Creme brulée",
			link: "https://madensverden.dk/creme-brulee/"
		},
		{
			name: "Creme brulée 2",
			link: "https://www.valdemarsro.dk/creme-brulee/"
		},
		{
			name: "Baked alaska",
			link: "https://www.femina.dk/mad/desserter/baked-alaska-med-hindbaerparfait"
		},
		{
			name: "Hindbær mousse",
			link: "https://www.gastrofun.dk/opskrift/hindbaer-mousse"
		},
		{
			name: "Passionsfrugt mousse",
			link: "https://www.laylita.com/recipes/maracuya-or-passion-fruit-mousse/"
		},
		{
			name: "Jordbærcreme",
			link: "https://spisbedre.dk/opskrifter/jordbaerlagkage-med-jordbaercreme"
		},
		{
			name: "Gateau marcel 2 lag",
			link: "https://www.femina.dk/mad/desserter/gateau-marcel-chokoladekage-i-lag"
		},
		{
			name: "Proteinpandekager",
			link: "http://www.webopskrifter.dk/opskrifter/proteinpandekagerbanankokos-21277/"
		},
		{
			name: "Havregrynskugler",
			link: "https://www.valdemarsro.dk/havregrynskugler/"
		}
	]

	foodLinks: BasicLinkObject[] = [
		{
			name: "5 forskellige hverdagsretter",
			link: "https://www.facebook.com/buzzfeedtasty/videos/206721910731884/"
		},
		{
			name: "Blomkålssuppe",
			link: " https://www.valdemarsro.dk/blomkaalssuppe/"
		},
		{
			name: "Lasagne - Kyllingelasagne",
			link: "https://www.dk-kogebogen.dk/opskrifter/visopskrift.php?id=19934"
		},
		{
			name: "Porretærte",
			link: "http://www.webopskrifter.dk/madopskrifter/3321"
		},
		{
			name: "Blomkålsdeller",
			link: " http://anna-mad.dk/2017/02/sproede-blomkaalsdeller-med-foraarsloeg-og-parmesan/"
		},
		{
			name: "Squashpasta",
			link: "http://www.webopskrifter.dk/opskrifter/squashpasta-20541/"
		},
		{
			name: "Pasta i champignonsauce",
			link: "https://www.arla.dk/opskrifter/pasta-i-champignonsauce/"
		},
		{
			name: "Laksetartar",
			link: "https://www.spisbedre.dk/forretter/fisk/laekker-laksetatar-med-krydderurter"
		},
		{
			name: "Laksetartar (den med mayo)",
			link: "https://kreamorskoekken.dk/roeget-laksetatar/"
		},
		{
			name: "Grilled vegetables + feta + tabbouleh",
			link: "https://www.jamieoliver.com/recipes/cheese-recipes/griddled-vegetables-feta-with-tabbouleh/"
		},
		{
			name: "Kyllingeboller med rodfrugtspaghetti",
			link: "https://www.nemlig.com/opskrifter?search=Kyllingek%C3%B8dboller"
		},
		{
			name: "Gnocchi",
			link: "https://rigeligtsmor.dk/opskrift-hjemmelavet-gnocchi/"
		},
		{
			name: "Risotto",
			link: "http://www.saeson-web.dk/opskrifter/risotto-med-kylling-og-blomkaal/"
		},
		{
			name: "Risotto, svampe",
			link: "http://clemfoodie.com/2019/11/13/risotto-potimarron-champignons-noisettes/"
		},
		{
			name: "Risotto - Græskarsrisotto",
			link: "http://clemfoodie.com/?s=Risotto+courge"
		},
		{
			name: "Aubergine parmigiana",
			link: "https://www.jamieoliver.com/recipes/vegetable-recipes/aubergine-parmigiana-with-crispy-breadcrumbs/"
		},
		{
			name: "Wine braised chicken",
			link: "https://www.jamieoliver.com/recipes/chicken-recipes/wine-braised-chicken-with-roasted-grapes/"
		},
		{
			name: "Risotto - Wild rice and mushroom risotto",
			link: "http://www.olivemagazine.com/recipes/wild-rice-and-mushroom-risotto-with-roast-garlic/15078.html"
		},
		{
			name: "Roast duck leg",
			link: "hhttps://www.bbcgoodfood.com/recipes/1188/roast-duck-legs-with-red-wine-sauceere"
		},
		{
			name: "Duck and shallots au vin",
			link: "http://www.olivemagazine.com/recipes/duck-and-shallots-au-vin/11690.html"
		},
		{
			name: "Bagt kylling med kartofler",
			link: "https://www.valdemarsro.dk/bagt-kylling/"
		},
		{
			name: "Ravioli med svampe",
			link: "https://www.valdemarsro.dk/ravioli-med-svampe-hasselnoedder-og-rosmarinsauce/"
		},
		{
			name: "Ravioli med gorgonzola sauce",
			link: "https://www.valdemarsro.dk/ravioli-opskrift/"
		},
		{
			name: "Butter chicken",
			link: "https://thekitchenpaper.com/indian-butter-chicken/"
		},
		{
			name: "Chicken Biryani",
			link: "https://www.thedeliciouscrescent.com/easy-hyderabadi-chicken-biryani/"
		},
		{
			name: "Chicken Korma",
			link: "https://dinnerthendessert.com/indian-chicken-korma/"
		},
		{
			name: "Naan Brød",
			link: "https://drkoch.dk/indiske-naanbroed-med-og-uden-hvidloeg-opskrift/"
		},
		{
			name: "Naan",
			link: "https://www.frokenkraesen.com/opskrift-naanbroed-paa-30-minutter/"
		},
		{
			name: "Mushroom curry",
			link: "https://www.jamieoliver.com/recipes/vegetable-recipes/mushroom-curry/"
		},
		{
			name: "Pulled chicken",
			link: "http://www.myrecipes.com/recipe/pulled-chicken-sandwiches"
		},
		{
			name: "Beef wellington",
			link: "https://tasty.co/recipe/show-stopping-beef-wellington"
		},
		{
			name: "Chicken fried rice",
			link: "https://www.valdemarsro.dk/fried-rice-med-kylling/"
		},
		{
			name: "Jacket potato",
			link: "http://www.foodnetwork.co.uk/article/jacket-potato-recipes/twice-baked-potatoes-0/3.html"
		},
		{
			name: "Buddha bowl",
			link: "https://www.valdemarsro.dk/buddha-bowl/"
		},
		{
			name: "Chicken satay",
			link: "https://www.yummly.com/recipe/Thai-Chicken-Satay-with-Peanut-Sauce-9026800?prm-v1#directions"
		},
		{
			name: "Panang Curry Chicken",
			link: "https://www.louisesmadblog.dk/panang-karry-med-kylling-panang-gai/"
		},
		{
			name: "Tacos",
			link: "http://www.louisesmadblog.dk/tacos/"
		},
		{
			name: "Meatless tacos",
			link: "https://www.google.com/amp/s/tasty.co/compilation/meatless-tacos-5-ways"
		},
		{
			name: "Quinoa deller",
			link: "https://www.valdemarsro.dk/quinoadeller/"
		},
		{
			name: "Lasagne - mexi kyllinge lasagne",
			link: "http://www.webopskrifter.dk/madopskrifter/150/"
		},
		{
			name: "Black bean enchiladas",
			link: "https://cookieandkate.com/2016/vegetarian-enchiladas-recipe/"
		},
		{
			name: "One-pot",
			link: "http://www.taste.com.au/recipes/mexican-beef-bean-frying-pan-meatballs/UbBjZVOS?r=recipes/onepotrecipes&c=eb502bf5-c548-4ff9-8e78-47ff7efef8ec/One%20pot%20recipes"
		},
		{
			name: "Peruvian style ceviche",
			link: "https://www.jamieoliver.com/recipes/seafood-recipes/peruvian-ceviche/"
		},
		{
			name: "Fish tacos",
			link: "https://www.delish.com/uk/cooking/recipes/a28869036/easy-fish-taco-recipe/"
		},
		{
			name: "Poached eggs",
			link: "https://downshiftology.com/recipes/poached-eggs/"
		},
		{
			name: "Black bean burgers",
			link: "https://www.jamieoliver.com/recipes/vegetable-recipes/black-bean-burgers/"
		},
		{
			name: "Mushroom wellington",
			link: "https://www.bbcgoodfood.com/recipes/12804/melty-mushroom-wellingtons"
		},
		{
			name: "Beetroot feta tarts",
			link: "https://www.bbcgoodfood.com/recipes/spiced-beetroot-feta-tarts-tahini-dressed-leaves"
		},
		{
			name: "Spinach/ricotta rotolo",
			link: "https://www.bbcgoodfood.com/recipes/spinach-ricotta-rotolo"
		},
		{
			name: "Garlic cheese stuffed mushrooms*",
			link: "https://www.happyfoodstube.com/garlic-stuffed-mushrooms/"
		},
		{
			name: "Salad chevre chaud",
			link: "https://www.valdemarsro.dk/salade-chevre-chaud/"
		},
		{
			name: "Veggie shepherd's pie",
			link: "https://www.valdemarsro.dk/vegetarisk-shepards-pie/"
		},
		{
			name: "Friturestegte svampe",
			link: "https://www.shroomi.dk/svampeopskrift/friturestegte-champignon/"
		},
		{
			name: "Potato roll",
			link: "https://www.instagram.com/p/B3eOWUoAs2E/?igshid=1rg33htw9fz6"
		},
		{
			name: "Moussaka",
			link: "https://www.valdemarsro.dk/moussaka/"
		},
		{
			name: "Egg plant goat cheese tomato bake",
			link: "https://www.allrecipes.com/recipe/63704/grilled-eggplant-tomato-and-goat-cheese/"
		},
		{
			name: "Spicy cauliflower wings",
			link: "https://www.veganricha.com/2019/07/sticky-sesame-cauliflower-recipe.html"
		},
		{
			name: "Sushi tacos",
			link: "http://coupleeatsfood.com/sushi-tacos-with-crispy-fried-seaweed-shells/"
		},
		{
			name: "Salmon sashimi",
			link: "https://www.santamariaworld.com/ie/recipes/salmon-sashimi/"
		},
		{
			name: "Gyoza dipping sauce",
			link: "https://www.recipezazz.com/recipe/gyoza-dipping-sauce-20523"
		},
		{
			name: "Gyoza",
			link: "https://youtu.be/z60_v7NhFck"
		},
		{
			name: "Hoisin sauce",
			link: "https://www.daringgourmet.com/best-homemade-hoisin-sauce/"
		},
		{
			name: "Chinese five spice",
			link: "https://www.daringgourmet.com/2013/04/12/chinese-five-spice-powder/"
		},
		{
			name: "Homemade black bean sauce",
			link: "https://www.daringgourmet.com/2016/03/04/how-to-make-homemade-black-bean-sauce-or-black-bean-paste/"
		},
		{
			name: "Okonomiyaki",
			link: "https://www.valdemarsro.dk/okonomiyaki/"
		},
		{
			name: "Bao filling",
			link: "https://www.google.com/amp/s/www.brit.co/steamed-bao-recipes-2639446564.amp.html"
		},
		{
			name: "Forårsruller",
			link: "https://www.valdemarsro.dk/sproede-foraarsruller/"
		},
		{
			name: "Miso",
			link: "https://www.chopstickchronicles.com/how-to-make-miso/"
		},
		{
			name: "Fried dumplings",
			link: "https://www.thespruceeats.com/chinese-pan-fried-dumplings-694499"
		},
		{
			name: "Miso glaced salmon",
			link: "http://clemfoodie.com/2019/01/28/saumon-glace-au-miso-riz-kale-et-avocat/"
		},
		{
			name: "Sticky garlic sesame chicken",
			link: "https://www.swankyrecipes.com/sticky-garlic-sesame-chicken.html"
		}
	]
}
</script>
