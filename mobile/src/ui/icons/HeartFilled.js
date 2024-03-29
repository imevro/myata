import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';
import colorsToGradient from '../colorsToGradient';

const getColors = color => colorsToGradient[color.toLowerCase()];

const SvgComponent = ({
  size,
  color = '#000000',
  withGradient = false,
  ...props
}) => (
  <Svg viewBox="0 0 50 50" width={size} height={size} fill={color} {...props}>
    {withGradient && (
      <LinearGradient id="grad" y1="0" y2={size}>
        <Stop offset="0" stopColor={getColors(color)[0]} stopOpacity="1" />
        <Stop offset="1" stopColor={getColors(color)[1]} stopOpacity="1" />
      </LinearGradient>
    )}

    <Path
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: withGradient ? 'url(#grad)' : color,
        fillOpacity: 1,
      }}
      d="M 25 44.296875 L 24.363281 43.769531 C 23.363281 42.941406 22.019531 42.027344 20.46875 40.96875 C 14.308594 36.765625 5 30.414063 5 20.285156 C 5 14.0625 10.097656 9 16.363281 9 C 19.714844 9 22.851563 10.457031 25 12.957031 C 27.148438 10.457031 30.289063 9 33.636719 9 C 39.902344 9 45 14.0625 45 20.285156 C 45 30.414063 35.691406 36.765625 29.53125 40.96875 C 27.976563 42.027344 26.636719 42.941406 25.636719 43.769531 Z"
    />
  </Svg>
);

export default SvgComponent;
