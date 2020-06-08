# HarcMap
Content:
1. Installation
2. Development
3. Local Database
    1. Installation






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
1. Make in terminal:
    ```
    npm i
    npm start
    ``` 
2. Open https://localhost:8000/

#### Production environment:
1. Install packages: `npm i`
2. Run server: `npm run run:prod`
3. App is ready!




## Local database
#### Installation
1. To run local database be sure that you already downloaded [Docker](https://www.docker.com/products/docker-desktop)
2. Next step is run npm script: 
```
npm run run:mongodb // Warning! It can be necessary to run this command with administrator permission(sudo)
``` 

#### Default data in local database
For default, local database is filled example data to run all basic functionality.
It means one user(zhp@harcmap.henouser.pl), one event(ab12) with 3 categories and 4 points.

It doesn't contain any data about "RTL Gdynia" event or another. 
Default data are smallest content to run basic functionality!

**All initialized data are set from `/config/mongodb/local.js` script.**  

#### Adding "RTL Gdynia" points to database:
1. To add points, necessary categories and events you have to run local database first `npm run run:mongodb`
2. When local DB completely load, run command `npm run fill-database`.
3. Thats all!

`fill-database` script, add only "RTL Gdynia" data to database!


