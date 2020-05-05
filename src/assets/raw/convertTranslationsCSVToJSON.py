
# coding: utf-8

# # CookingAssistant recipes: CSV to JSON 
# ----
# 
# #### Input
# * recipes:  `recipes.csv` 
# 
# #### Output
# * `recipes in new format`: `recipes.json`
# 
# 
# #### Procedure
# Convert all recipes from CSV to JSON  file for use in cooking assistant
# ----

# ----------------------------------------------------------------
# **Importing needed libraries**
# ----------------------------------------------------------------
import pandas as pd
import json
import os
import numpy as np
from time import ctime, strftime, gmtime

os.getcwd()
troubleshoot = False


print("Today's date: " + ctime())

print("---------------------------------------------------")
print("Preparing for conversion ..")
print("Moving old recipe file to archive ..")

datestr = strftime("%d%m%Y", gmtime()) 
name = "recipes"
basePath = '../../data/'

if os.path.isfile('basePath' + name + ".json"):
    archivePath = basePath + "archive/" + name + datestr + ".json"
    if not os.path.isfile(archivePath):
        os.rename( basePath + name + ".json", archivePath)
        print("Old recipes file moved to archive.")
    print("Recipes file already moved to archive")
else:
    print("No previous recipe file, skipping move")
print("---------------------------------------------------")

# ----------------------------------------------------------------
# ## Functions
# ----------------------------------------------------------------

# Converting CSV content to nested json objet
# df                 - dataframe with csv content
def getRecipeObject(df):
    recipe = {}

	# Create object for each recipe
    for attr in df.columns[0:].values:
    	recipe[attr] = ""

    return recipe

# Convert ingredient string on format "<amount>*<unit>*<ingredient>/<amount>*<unit>*<ingredient>"
# ingredient separator "/"
# separator: * (could possibly just work with whitespace?)
# To 
# {
#   amount: <amount>,
#   unit: <unit>,
#   ingredient: <ingredient> 
# }
# Save in list

def stringToIngredientObject(string):
	ingredients = []
	object = { "amount": "", "unit": "", "ingredient": "" } # basic object structure
	ingredient = string.split("/")

	for part in ingredient:

		part2 = part.split("*")
		
		if(len(part2) == 3):
			object["amount"] = part2[0]
			object["unit"] = part2[1]
			object["ingredient"] = part2[2] 
			ingredients.append(object)
		else:
			print("ingredient not added correctly, information is: ", part2)

		# Resetting object
		object = { "amount": "", "unit": "", "ingredient": "" } 
	
	return ingredients

# Structure all information about one recipe in recipe object
# {
#	name: 			string		name of recipe
#   teaser: 		string		Short description of dish
#   image: 			string 		Filename (<filename>.<extension>)
#   path: 			string		router path
#   ingredients: 	Object		list of ingredients
#   steps: 			Object		how-to guide in steps
#   inspirationlink: string		link to recipe my recipe is based on
# }
def fillRecipe(df, recipeObj):
	recipe = recipeObj.copy()
	recipes = []
	print(recipeObj)

	for i in range(len(df['name'])):
		print("\nConverting recipe: " + df['name'][i])
		recipe['name'] = df['name'][i]
		recipe['teaser'] = df['teaser'][i] 
		recipe['image'] = df['image'][i]
		recipe['path'] = df['path'][i] 
		recipe['ingredients'] = stringToIngredientObject(df['ingredients'][i])
		recipe['steps'] = df['steps'][i].split("/")
		recipe['inspirationlink'] = df['inspirationlink'][i]
		print("Converted recipe: ", recipe)
		recipes.append(recipe)
		recipe = recipeObj.copy()
	return recipes


# ----------------------------------------------------------------
# ## Recipes
# ----------------------------------------------------------------

# #### Reading in file with recipes

print("Converting recipes in CSV file.. ")
df = pd.read_csv("recipes.csv")
df_no_nan = df.replace(np.nan, '', regex=True)
# Extracting propperties (columns)
print("All columns in sheet: ", df_no_nan.columns[0:].values, "\n")

# #### Converting csv content to JSON object
recipes = fillRecipe(df_no_nan, getRecipeObject(df))

if(troubleshoot):
    print(json.dumps(recipes, indent=4))

# ### Saving the above struture to a .JSON file

print("Saving object to file as '" + name + ".json'.. ")
with open(basePath + name + '.json', 'w') as f:
    json.dump(recipes, f)
    print("Conversion completed!")
