# HarcMap
Content:
1. [Installation](#installation)
    1. Requirements
    2. How to prepare Intellij IDE (Webstorm / Phpstorm) for front-end development
2. [Development](#development)
    1. Devel environment
    2. Production environment:
3. [Local Database](#local-database)
    1. Database installation
    2. Default data in local database
    3. Adding "RTL Gdynia" points to database
4. [Swagger API documentation](#swagger-documentation)
5. [Version release](#version-release)



## Installation

#### Requirements
- node v10.15.3 or higher
- npm v6.13.7 or higher

#### How to prepare Intellij IDE (Webstorm / Phpstorm) for front-end development
1. You have to get into `Settings/Languages & Frameworks/JavaScript/Webpack` and set `webpack.common.js` as a config file.
2. Open `Project Files` click by right button on `.eslintrc` file and click `Apply ESLint Code Style Rules` option.
3. You have to get into `Settings/Editor/Code Style/HTML`, find `Do not indent children of` option and add `script` tag there.
4. Restart IDE



## Development

#### Devel environment
1. Install packages: `npm i`
2. Run the local database ([read more](#local-database))
3. Fill the database ([read more](#adding-rtl-gdynia-points-to-database))
4. Run the local server: `npm run run:dev`
5. Run the front-end builder: `npm run build:dev`
6. App is ready on https://localhost:3030/
7. If you get into https://localhost:3030/sign-in, the application log you in automatically on 
   the demo account (to edit demo user's data go to `config/mongodb/local.js`).

#### Production environment:
1. Install packages: `npm i`
2. Build front-end package: `npm run build:prod`
2. Run server: `npm run run:prod`
3. App is ready!




## Local database

#### Database installation
1. To run the local database be sure that you already installed [Docker](https://www.docker.com/products/docker-desktop)
2. Next step is running npm script: 
```
// Warning! It can be necessary to run this command with administrator permissions (sudo)
npm run run:mongodb
``` 

#### Default data in local database
For default, the local database is filling example data to run all basic functionality.
It means one user(zhp@harcmap.henouser.pl), one event(ab12) with 3 categories and 4 points.


It doesn't contain any data about "RTL Gdynia" event or another. 
Default data are the smallest content to run basic functionality!

All initialized data are setting from `/config/mongodb/local.js` script!

#### Adding "RTL Gdynia" points to database:
1. To add points, necessary categories and events you have to run local database first ([read more](#local-database))
2. When local DB completely load, run command `npm run fill-database`.
3. That's all!

`fill-database` script, add only example "RTL Gdynia" data to database!


## Swagger documentation
Swagger documentation is easy to see. You just have to:
1. Run app in DEVELOPMENT env `npm run run:dev`.
2. Go to url: https://localhost:3030/api-docs

View of swagger documentation are group by main endpoint categories like: User, Point, Event(part of them are still todo).


## Version release
To do list:
- Update CHANGELOG.md
- Update version in package.json
- Merge to master
