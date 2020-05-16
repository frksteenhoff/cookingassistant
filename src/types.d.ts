declare type RecipeObject = {
	name: string,
	teaser: string,
	image: string, 
	ingredients: IngredientObject[],
	steps: string[],
	servings: string
	categories?: string[],
	preparation_time?: string,
	inspirationlink?: string,
	path: string,
}

declare type IngredientObject = {
	amount: string, 
	unit: string, 
	ingredient: string
}