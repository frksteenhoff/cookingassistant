# cookingassistant
A webapp with recipes and unit converter for easy cooking!

View the app here: <link missing>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

Commits on this branch automatically pushes the changes to Heroku.

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
│   ├── assets          # abstraction of the rest api in code, used solely through the data store
│   ├── components      # data files for api fallback
│   ├── data            # recipes
│       ├── .formRecipes.json   # recipes created usig browser
│       ├── .recipes.json       # recipes from Excel file
│       └── archive         # old recipe JSON files
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