import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import NotFound from "../views/NotFound.vue"
import FoodLinks from "../views/FoodLinks.vue"
import Create from "../views/Create.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: "/",
		name: "home",
		component: Home
	},
	{
		path: "/unitconverter",
		name: "unitconverter",
		// route level code-splitting
		// this generates a separate chunk (conversion.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "conversion" */ "../views/UnitConverter.vue")
	},
	{
		path: "/foodlinks",
		name: "Madlinks",
		component: FoodLinks
	},
	{
		path: "/create",
		name: "opret",
		component: Create
	},
	{
		path: "/recipes",
		name: "recipes",
		// route level code-splitting
		// this generates a separate chunk (recipes.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "recipes" */ "../views/Recipes.vue")
	},
	{
		path: "/recipes/:name",
		name: "recipe",
		component: () => import("../views/RecipeDescription.vue")
	},
	{
		path: "*",
		name: "404",
		component: NotFound
	}
]

const router = new VueRouter({
	routes
})

export default router
