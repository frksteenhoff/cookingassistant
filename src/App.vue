<template>
	<div id="app">
		<b-navbar sticky toggleable="lg" type="dark" variant="hest">
			<b-navbar-brand href="#" class="mb-0 pb-0 pt-0">
				<img src="./assets/logo_cropped.png" style="width: 60px;" />
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
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
				<p style="font-size: 30px; font-family: 'Permanent Marker'; font-weight: bold">
					Henriette Steenhoff
					<!-- Adding logo inline -->
					<span id="insta_logo">
						<a href="https://www.instagram.com/frksteenhoff/" target="_blank">
							<img style="float:right;" src="./assets/instagram_logo.png" />
						</a>
					</span>
				</p>
				<p>
					<a
						href="mailto:henriette.steenhoff@gmail.com?Subject=Vriiinsk"
						style="padding-left:0"
						target="_top"
					>henriette.steenhoff@gmail.com</a>
				</p>
				<p>
					<a href="https://www.twitter.com/frksteehoff" style="padding-left:0">@frksteenhoff</a>
				</p>
			</div>
		</footer>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
const AppProps = Vue.extend({
	props: {}
})

@Component({
	components: {}
})
export default class App extends AppProps {
	links = [
		{
			id: 0,
			text: "Hjem",
			page: "/"
		},
		{
			id: 3,
			text: "Enhedsoversætter",
			page: "/UnitConverter"
		},
		{
			id: 4,
			text: "Opskrifter",
			page: "/Recipes"
		}
	];
}
</script>

<style>
@import url("//fonts.googleapis.com/css?family=Permanent+Marker:300,400,600,700&amp;lang=en");
@import url("//fonts.googleapis.com/css?family=Roboto:300,400,600,700&amp;lang=en");

@media only screen and (max-width: 480px) {
	h1 {
		font-size: 18px !important;
	}
	h2 {
		font-size: 14px !important;
	}
	h3 {
		font-size: 12px !important;
	}
}

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
	color: #bf988f;
}

ul.navbar-nav {
	margin-top: 0;
}
nav,
li a.nav-link,
a.link-item {
	color: #ffffff !important;
	font-size: 30px;
	font-family: "Permanent Marker";
	background-color: #bf988f !important;
}

#content {
	min-height: 1000px;
}

#nav-collapse.navbar-collapse.collapse,
nav {
	height: 4.5rem;
}

img {
	margin: 0;
	padding-bottom: 0;
	width: 100%;
	justify-content: center;
}
p,
h1,
h2 {
	font-weight: normal;
	padding-left: 21px;
	padding-right: 21px;
}
h1 {
	font-family: "Permanent Marker";
	background-color: #dfcbc7;
	color: #ffffff;
	display: inline;
	margin: 0.75rem 41px;
}
p {
	font-size: 26px;
	line-height: 1.4;
	margin-left: 21px;
	margin-right: 21px;
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
	background-color: #bf988f;
	color: #ffffff;
}
a {
	color: #bf988f !important;
	text-decoration: none !important;
	padding: 5px !important;
	padding-left: 10px !important;
	padding-right: 10px !important;
}

a:hover,
a.nav.link:hover {
	/*text-decoration: underline !important;*/
	background: #bf988f;
	opacity: 0.5 !important;
	text-decoration: none !important;
	color: #000000 !important;
}
footer {
	width: 100%;
	position: absolute;
	margin: 0;
	padding: 16px 0 16px 0;
	padding-bottom: 40px;
	background-color: #bf988f;
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
p.top_line {
	font-weight: bold;
}
p.end_line {
	margin-top: 4em;
	font-size: 30px;
	font-family: "Permanent Marker";
}
.under_header {
	margin-top: 21px;
}
</style>
