# CookingAssistant
A Vue, TypeScript, Bootstrap webapp with different kinds of recipes made available in my online cook book for easy cooking anywhere! 
The application is in Danish, for now.

Images and more recipes are added continuously.

View the app here: [cookingassistant.herokuapp.com](https://cookingassistant.herokuapp.com/)

## Preview
### Recipe overview
Browse recipes
![](https://github.com/frksteenhoff/cookingassistant/blob/master/src/assets/preview.PNG)

### Unit converter
Convert standard units
![](https://github.com/frksteenhoff/cookingassistant/blob/master/src/assets/preview-converter.PNG)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run cookbook
```

### Compiles and minifies for production
```
npm run build
```

_Commits on branch master are automatically pushed to and built on Heroku._

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## Directory structure and naming
```
.
├── dist            # built and bundled files and index.html 
├── node_modules    # dependencies -- not committed, not manually handled
├── public          # static resources (e.g. favicon and logo)
│   └── index.html      # the main entry point for the application
├── src             # application source files -- where most logic and interface resides
│   ├── assets          # application images and logos
│       ├── reipes      # images for all recipes
│       └── carousel    # images used in front page carousel 
│   ├── components      # application components
│   ├── data            # recipes
│       ├── .formRecipes.json   # recipes created usig browser
│       ├── .recipes.json       # recipes from Excel file
│       └── archive             # old recipe JSON files
│   ├── router          # routing logic and setup
│   ├── store           # vuex store
│   ├── App.vue         # main application
│   ├── main.ts         # entry point for the actual vue application 
├── tests               # directory for all upcoming unit tests
│   ├── 
├── .eslintrc.js    # eslint rules for linting
├── .browserlistrc  # 
├── .gitignore      # git rules to which files to ignore from version control
├── babel.config.js # babel transpiling configuration
├── package.json    # package information, build configuration, and dependency declarations
├── README.md       # this file
├── tsconfig.json   # typescript configuration
```
