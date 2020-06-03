# HarcMap

### Necessary packages to run
- node v10.15.3 or higher
- npm v6.13.7 or higher

### How to run project
#### Development
1. Make in terminal:
    ```
    npm i
    npm start
    ``` 
2. Open https://localhost:8000/

#### Production:
1. Install packages: `npm i`
2. Run server: `npm run run:prod`
3. App is ready!

### How to prepare Intellij IDE (Webstorm / Phpstorm) for front-end development
1. You have to get into `Settings/Languages & Frameworks/JavaScript/Webpack` and set `webpack.common.js` as a config file.
2. Open `Project Files` click by right button on `.eslintrc` file and click `Apply ESLint Code Style Rules` option.
3. You have to get into `Settings/Editor/Code Style/HTML`, find `Do not indent children of` option and add `script` tag there.
4. Restart IDE

### Local MongoDB database:
1. To run local database be sure that you already downloaded [Docker](https://www.docker.com/products/docker-desktop)
2. Next step is run npm script: 
```
npm run run:mongodb
```
**Attention! It can be necessary to run this command with administrator permission(sudo)**


**All initialized data are set from `/config/mongodb/local.js` script.**  

#### To set your own initialization data:
1. Create script that set this data: `/config/mongodb/[your_folder_name]/local.js`
2. Run database: 
```
docker run -p 27017:27017 -v `pwd`/config/mongodb/[your_folder_name]:/docker-entrypoint-initdb.d mongo
```

### Adding "Rodło" points to database:
1. To add points, necessary categories and events you have to run local database first `npm run run:mongodb`
2. When local DB completely load, run command `npm run fill-database`.
3. Thats all!

