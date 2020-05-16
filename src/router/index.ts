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
		name: "Home",
		component: Home
	},
	{
		path: "/UnitConverter",
		name: "UnitConverter",
		// route level code-splitting
		// this generates a separate chunk (conversion.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "conversion" */ "../views/UnitConverter.vue")
	},
	{
		path: "/FoodLinks",
		name: "Madlinks",
		component: FoodLinks
	},
	{
		path: "/Create",
		name: "Opret",
		component: Create
	},
	{
		path: "/Recipes",
		name: "Recipes",
		// route level code-splitting
		// this generates a separate chunk (recipes.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "recipes" */ "../views/Recipes.vue")
	},
	{
		path: "/Recipes/:name",
		name: "Recipe",
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
