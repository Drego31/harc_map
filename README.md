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
