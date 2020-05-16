declare type RecipeObject = {
	name: string,
	teaser: string,
	image: string, 
	ingredients: IngredientObject[],
	steps: string[],
	servings: string
	categories?: string[],
	preparationtime?: string,
	inspirationlink?: string,
	path: string,
}

declare type IngredientObject = {
	amount: string, 
	unit: string, 
	ingredient: string
}

declare type ConversionObject = {
	from: string, 
	to: string
} 

declare type BasicLinkObject = {
	name: string, 
	link: string
}