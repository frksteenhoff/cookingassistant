import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipe: Object,
		units: ["ml", "dl", "L", "F", "C", "K", "tsk", "spsk", "knivspis", "g", "kg", "stk", "bundt"],
		tags: ["aftensmad", "snack", "brød", "bagning", "dessert", "specielle anledninger", "sause", "dip", "morgenmad", "frokost", "marinade", "drink"]
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
