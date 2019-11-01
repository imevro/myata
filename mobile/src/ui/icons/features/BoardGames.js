import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

import { icons as colorsToGradient } from '../../colorsToGradient';

const SvgComponent = ({
  size,
  color = '#000000',
  withGradient = false,
  ...props
}) => {
  const [start, end] = colorsToGradient[color.toLowerCase()];

  return (
    <Svg width={size} height={size} viewBox="0 0 50 50" {...props}>
      {withGradient && (
        <LinearGradient id="grad" y1="0" y2={size}>
          <Stop offset="0" stopColor={start} stopOpacity="1" />
          <Stop offset="1" stopColor={end} stopOpacity="1" />
        </LinearGradient>
      )}

      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: withGradient ? 'url(#grad)' : color,
          fillOpacity: 1,
        }}
        d="M 13.5 2 C 11.265625 2 9.195312 3.21875 8.21875 5.25 C 8.210938 5.265625 8.195312 5.265625 8.1875 5.28125 L 4.90625 11.53125 C 4.894531 11.570312 4.882812 11.613281 4.875 11.65625 C 4.867188 11.667969 4.851562 11.675781 4.84375 11.6875 C 4.84375 11.699219 4.84375 11.707031 4.84375 11.71875 C 4.3125 12.703125 4 13.808594 4 15 L 4 41 C 4 44.84375 7.15625 48 11 48 L 39 48 C 42.84375 48 46 44.84375 46 41 L 46 15 C 46 13.824219 45.707031 12.726562 45.1875 11.75 C 45.171875 11.640625 45.140625 11.535156 45.09375 11.4375 L 41.78125 5.15625 C 41.777344 5.148438 41.785156 5.132812 41.78125 5.125 L 41.75 5.125 C 40.761719 3.191406 38.734375 2 36.5 2 Z M 13.5 4 L 36.5 4 C 38.050781 4 39.378906 4.820312 40 6.0625 L 41.21875 8.375 C 40.515625 8.136719 39.777344 8 39 8 L 11 8 C 10.246094 8 9.527344 8.121094 8.84375 8.34375 L 10 6.15625 C 10 6.144531 10 6.136719 10 6.125 C 10.632812 4.78125 11.949219 4 13.5 4 Z M 25.59375 4.96875 C 24.867188 4.96875 24.144531 5.039062 23.59375 5.1875 C 22.695312 5.488281 22.59375 5.800781 22.59375 6 C 22.59375 6.199219 22.695312 6.613281 23.59375 6.8125 C 24.195312 6.914062 24.894531 7 25.59375 7 C 26.394531 7 27.09375 6.914062 27.59375 6.8125 C 28.492188 6.511719 28.59375 6.199219 28.59375 6 C 28.59375 5.800781 28.492188 5.386719 27.59375 5.1875 C 27.042969 5.039062 26.320312 4.96875 25.59375 4.96875 Z M 11 10 L 39 10 C 41.753906 10 44 12.246094 44 15 L 44 41 C 44 43.753906 41.753906 46 39 46 L 11 46 C 8.246094 46 6 43.753906 6 41 L 6 15 C 6 12.246094 8.246094 10 11 10 Z M 34 16 C 32.34375 16 31 17.34375 31 19 C 31 20.65625 32.34375 22 34 22 C 35.65625 22 37 20.65625 37 19 C 37 17.34375 35.65625 16 34 16 Z M 25 25 C 23.34375 25 22 26.34375 22 28 C 22 29.65625 23.34375 31 25 31 C 26.65625 31 28 29.65625 28 28 C 28 26.34375 26.65625 25 25 25 Z M 16 34 C 14.34375 34 13 35.34375 13 37 C 13 38.65625 14.34375 40 16 40 C 17.65625 40 19 38.65625 19 37 C 19 35.34375 17.65625 34 16 34 Z M 16 34 "
      />
    </Svg>
  );
};

export default SvgComponent;
