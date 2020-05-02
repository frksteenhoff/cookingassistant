import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		recipe: Object
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
