import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
/**
 * Baseline scale ratio device dimensions
 */
const guidelineBaseWidth = 320;

export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

export const s = scale;
