const colorsUtils = {
  convertRGBToArray (color) {
    const colorValues = color.split('(')[1].split(')')[0];
    const colorArray = colorValues.split(',');
    return colorArray.map(partOfColor => Number(partOfColor.trim()));
  },
};

const colorsRGB = {
  'red': 'rgb(255, 0, 0)',
  'blue': 'rgb(0, 0, 255)',
  'yellow': 'rgb(255, 255, 0)',
  'white': 'rgb(255, 255, 255)',
  'black': 'rgb(0, 0, 0)',
  'green': 'rgb(0,255,0)',
};

export const colorsRGBAsArray = () => {
  const result = { ...colorsRGB };
  Object.keys(result).map(key => {
    result[key] = colorsUtils.convertRGBToArray(result[key]);
  });
  return result;
};
