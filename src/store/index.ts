import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export interface AppState {
	recipe: RecipeObject;
	recipes: RecipeObject[];
	units: string[];
	tags: string[];
	servingsType: string[];
	createTags: string[];
  }

export default new Vuex.Store<AppState>({
	state: {
		recipe: {} as RecipeObject,
		recipes: {} as RecipeObject[],
		units: [
			"L",
			"ml",
			"dl",
			"F",
			"C",
			"cl",
			"K",
			"tsk",
			"spsk",
			"knivspids",
			"g",
			"kg",
			"stk",
			"bundt",
			"fed",
			"dåse(r)",
			"pakke(r)",
			"glas",
			"stilk(e)",
			"del"
		],
		tags: [
			"aftensmad",
			"snack",
			"brød",
			"bagning",
			"dessert",
			"specielle anledninger",
			"sauce",
			"dip",
			"dressing",
			"morgenmad",
			"frokost",
			"marinade",
			"drink",
			"tilbehør",
			"vegetarisk",
			"tapas",
			"forret",
			"varme drikke",
			"salat",
			"simreretter",
			"friture",
			"flambering",
			"syltning",
			"surdej",
			"spread",
			"raw",
			"suppe",
			"olier"
		],
		servingsType: [
			"person(er)",
			"portion(er)",
			"stk",
			"kage(r)",
			"L",
			"dl",
			"kg"
		],
		createTags: []
	},
	mutations: {
		setRecipe(state, recipeName) {
			state.recipe = state.recipes[state.recipes.map(recipe => recipe.name.toLowerCase()).indexOf(recipeName.toLowerCase())]
		},
		setRecipes(state, recipeObject) {
			state.recipes = recipeObject
		},
		setCreateTags(state, tags) {
			state.createTags = tags
		}
	},
	actions: {
		setRecipe(context, recipeName) {
			context.commit("setRecipe", recipeName)
		},
		setRecipes(context, recipes) {
			context.commit("setRecipes", recipes)
		},
		setCreateTags(context, tags) {
			context.commit("setCreateTags", tags)
		}
	},
	modules: {
	},
	getters: {
		getCreateTags: (state) => state.createTags,
		getTags: (state) => state.tags,
		getRecipe: (state) => state.recipe,
		getRecipes: (state) => state.recipes
	}
})
