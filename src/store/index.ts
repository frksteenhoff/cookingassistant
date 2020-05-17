import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipe: {},
		units: ["ml", "dl", "L", "F", "C", "K", "tsk", "spsk", "knivspis", "g", "kg", "stk", "bundt", "fed"],
		tags: ["aftensmad", "snack", "brød", "bagning", "dessert", "specielle anledninger", "sauce", "dip", "dressing", "marinade", "morgenmad", "frokost", "marinade", "drink", "tilbehør"],
		createTags: []
	},
	mutations: {
		setRecipe(state, recipeObject) {
			state.recipe = recipeObject
		},
		setCreateTags(state, tags) {
			state.createTags = tags
		}
	},
	actions: {
		setRecipe(context, recipeObject) {
			context.commit("setRecipe", recipeObject)
		},
		setCreateTags(context, tags) {
			context.commit("setCreateTags", tags)
		}
	},
	modules: {
	},
	getters: {
		getCreateTags: (state) => state.createTags
	}
})
