import { uCheck } from '@dbetka/utils';

export const colorsUtils = {
  convertRGBToArray (RGB) {
    const colorValues = RGB.split('(')[1].split(')')[0];
    const colorArray = colorValues.split(',');
    return colorArray.map(partOfColor => Number(partOfColor.trim()));
  },
  hexToRGB (hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  },
  hexOrRGBToRGB (hexOrRGB, alpha) {
    if (hexOrRGB.includes('#')) {
      return colorsUtils.hexToRGB(hexOrRGB, alpha);
    }
    const RGBArray = colorsUtils.convertRGBToArray(hexOrRGB);
    if (uCheck.isDefined(alpha)) {
      return `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, ${alpha})`;
    }
    if (uCheck.isDefined(RGBArray[3])) {
      return `rgba(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]}, ${RGBArray[3]})`;
    }
    return `rgb(${RGBArray[0]}, ${RGBArray[1]}, ${RGBArray[2]})`;
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

export const RGBColorsArray = () => {
  const result = { ...colorsRGB };
  Object.keys(result).map(key => {
    result[key] = colorsUtils.convertRGBToArray(result[key]);
  });
  return result;
};
