declare type RecipeObject = {
	name: string,
	teaser: string,
	image: string, 
	additionalImages?: string[], 
	ingredients: IngredientObject[],
	steps: string[],
	servings: string,
	servings_w_type?: ServingsObject,
	categories: string[],
	preparationtime?: PreparationTimeObject,
	protip: string,
	inspirationlink?: string,
	path: string,
	relatedrecipes?: string[]
}

declare type PreparationTimeObject = {
	active: string, // minutes
	passive: string // minutes
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

declare type CarouselObject = {
	caption: string,
	src: string
}

declare type MailToObject = {
	email: string,
	subject: string, 
	body: string
}

declare type ServingsObject = {
	servings: string,
	type: string
}