<template>
	<div id="app">
		<b-navbar sticky toggleable="xl" type="dark" variant="hest" class="shadow">
			<b-navbar-brand href="/" class="mb-0 pb-0 pt-0">
				<img src="./assets/logo_cropped.png" style="width: 50px;" />
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-nav-item-dropdown text="Quick-links" right>
					<b-dropdown-item href="#/recipes">Alle opskrifter</b-dropdown-item>
					<b-dropdown-item href="#/dinner">Aftensmad</b-dropdown-item>
					<b-dropdown-item href="#/breakfast">Morgenmad</b-dropdown-item>
					<b-dropdown-item href="#/bread">Brød</b-dropdown-item>
					<b-dropdown-item href="#/sauces">Saucer og dips</b-dropdown-item>
					<b-dropdown-item href="#/vegetarian">Vegetarisk</b-dropdown-item>
					<b-dropdown-item href="#/dessert">Dessert og bagning</b-dropdown-item>
				</b-nav-item-dropdown>

				<b-navbar-nav>
					<div v-for="link in links" :key="link.id">
						<b-nav-item :to="link.page">{{ link.text }}</b-nav-item>
					</div>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<div id="content">
			<router-view />
		</div>
		<footer>
			<div class="footerinfo">
				<p class="font-weight-bold m-0" style="font-size: 1rem; font-family: 'Permanent Marker'">
					Henriette Steenhoff
					<!-- Adding logo inline -->
					<span id="insta_logo">
						<a href="https://www.instagram.com/frksteenhoff/" target="_blank">
							<img class="m-4" style="float:right;" src="./assets/instagram_logo.png" />
						</a>
					</span>
				</p>
				<p class="m-0">
					<a
						class="pl-0"
						style="font-size: 0.8rem;"
						href="mailto:henriette.steenhoff@gmail.com?subject=CookingAssistant"
						target="_blank"
					>henriette.steenhoff@gmail.com</a>
				</p>
				<p class="mt-0">
					<a
						class="pl-0"
						style="font-size: 0.8rem;"
						href="https://www.twitter.com/frksteehoff"
					>@frksteenhoff</a>
				</p>
			</div>
		</footer>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import excelrecipes from "@/data/recipes.json"
import formrecipes from "@/data/formRecipes.json"

const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {}
})
export default class App extends AppProps {
	recipes: RecipeObject[] = excelrecipes.concat(formrecipes);

	created() {
		this.$store.dispatch("setRecipes", this.recipes)
	}

	links = [
		{
			id: 3,
			text: "Opskrifter",
			page: "/recipes"
		},
		{
			id: 4,
			text: "Enhedsoversætter",
			page: "/unitconverter"
		},
		{
			id: 6,
			text: "Opret",
			page: "/create"
		},
		{
			id: 5,
			text: "Andre madlinks",
			page: "/links"
		}
	];
}
</script>

<style>
@import url("//fonts.googleapis.com/css?family=Permanent+Marker:300,400,600,700&amp;lang=en");
@import url("//fonts.googleapis.com/css?family=Roboto:300,400,600,700&amp;lang=en");
@import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave&amp;lang=eng");
@import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&amp;lang=eng");

body {
	margin: 0;
	width: 100%;
	background-position: left 30px;
	/*background-image: url("/assets/ups.jpg");
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.9) 30%,rgba(255,255,255,0.9) 30%), url("/assets/ups.jpg");*/
	background-size: 80%;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-color: #fff;
}
#app {
	font-family: "Roboto Light", "Roboto", "Arial", Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #641e16;
}

#content {
	min-height: 100vh;
}

ul.navbar-nav {
	margin-top: 0;
}

#nav-collapse.navbar-collapse.collapse,
nav {
	height: 3.75rem;
}

a {
	color: #641e16 !important;
	text-decoration: none !important;
}

a:focus {
	background-color: lightgrey !important;
}

a:hover,
a.nav.link:hover {
	text-decoration: none !important;
	color: #000 !important;
}

nav,
li a.nav-link {
	color: #ffffff !important;
	font-size: 1.25rem;
	font-family: "Permanent Marker";
	background-color: #d6a2a2 !important;
	text-decoration: none !important;
	-webkit-tap-highlight-color: transparent;
	outline: none !important;
}

.nav-item a {
	width: 13rem;
	padding-left: 1rem;
}

.navbar-nav .nav-link {
	padding-left: 1rem !important;
}

img {
	margin: 0;
	padding-bottom: 0;
	width: 100%;
	justify-content: center;
}

img.card-img-top:hover,
img.opacity-change:hover {
	cursor: pointer;
	opacity: 0.9;
}

p {
	line-height: 1.4;
	font-size: 1rem;
	color: black !important;
}

p,
h1,
h2 {
	font-weight: normal;
	padding-left: 21px;
	padding-right: 21px;
}

h1 {
	font-family: "Homemade Apple";
	color: black;
	margin: 0;
	font-size: 3rem !important;
}

h2 {
	font-size: 1.4rem !important;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

#insta_logo img {
	margin: 41px;
	height: 40px;
	width: 40px;
}

#insta_logo a:hover {
	background-color: #d6a2a2;
	color: #ffffff;
}

.row {
	margin: 0;
}

.container-fluid {
	padding: 0;
}

footer {
	width: 100%;
	position: absolute;
	margin: 0;
	padding: 16px 0 16px 0;
	padding-bottom: 40px;
	background-color: #d6a2a2;
	color: #ffffff;
}

.footerinfo p,
.footerinfo p a {
	font-size: 20px;
	margin-top: 0.4em;
	margin-bottom: 0.4em;
	padding-left: 21px;
	text-decoration: none !important;
	color: #ffffff !important;
}
</style>
