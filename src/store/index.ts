import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipe: Object,
		units: ["ml", "dl", "L", "F", "C", "K", "tsk", "spsk", "knivspis", "g", "kg", "stk", "bundt", "fed"],
		tags: ["aftensmad", "snack", "brød", "bagning", "dessert", "specielle anledninger", "sauce", "dip", "dressing", "marinade", "morgenmad", "frokost", "marinade", "drink", "tilbehør"]
	},
	mutations: {
		setRecipe(state, recipeObject) {
			state.recipe = recipeObject
		}
	},
	actions: {
		setRecipe(context, recipeObject) {
			context.commit("setRecipe", recipeObject)
		}
	},
	modules: {
	}
})
