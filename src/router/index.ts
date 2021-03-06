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
		path: "/links",
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
		path: "/dinner",
		name: "dinner",
		component: () => import("../views/Recipes.vue")
	},
	{
		path: "/breakfast",
		name: "breakfast",
		component: () => import("../views/Recipes.vue")
	},
	{
		path: "/bread",
		name: "bread",
		component: () => import("../views/Recipes.vue")
	},
	{
		path: "/sauces",
		name: "sauces",
		component: () => import("../views/Recipes.vue")
	},
	{
		path: "/dessert",
		name: "dessert",
		component: () => import("../views/Recipes.vue")
	},
	{
		path: "/vegetarian",
		name: "vegetarian",
		component: () => import("../views/Recipes.vue")
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
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})

export default router
