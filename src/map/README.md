# HarcMap
#### Content:
1. How to generate a map for other themes
    1. Prepare utils
    2. Generate a map
    3. Advances styles
    4. Use map in the app


## How to generate a map for other themes

#### Prepare utils
Register free account on https://www.maptiler.com/

#### Generate a map
1. Go to https://cloud.maptiler.com/maps/.
2. Click on `Standard maps -> Topo`.
3. Find button `CUSTOMIZE A COPY` and click on it.
4. Set base colors of map.
5. Find button `Save` and click on it.
6. Fill `Title`, `Label`, choose `Rendering format` and click on `Create` button.
7. Find button `Publish`, click on it and confirm your decision in next view.

#### Advances styles
1. Go to https://cloud.maptiler.com/maps/.
2. Choose your map from list below `My maps` header.
3. Find button `CUSTOMIZE` and click on it.
4. Find button `ADVANCED EDITING`, click on it and confirm your decision in next view.
5. Now you can click on objects on the map and set own appearance for these objects.
6. Remember to save and publish your map (after publish the link to map will be the same as earlier.).

#### Use map in the app for dark theme
1. Find header `Use vector style`
2. Copy link from there.
3. Paste link into `src/map/config.js` to `mapConfig->sources->dark'

