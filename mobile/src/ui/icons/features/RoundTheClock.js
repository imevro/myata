import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

import colorsToGradient from "../../colorsToGradient";

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
        d="M 25 5 C 23.355469 5 22 6.355469 22 8 C 22 8.152344 22.007812 8.292969 22.03125 8.4375 L 5.71875 19 L 3 19 C 2.96875 19 2.9375 19 2.90625 19 C 2.390625 19.046875 1.996094 19.480469 2 20 L 2 44 C 2 44.550781 2.449219 45 3 45 L 47 45 C 47.550781 45 48 44.550781 48 44 L 48 20 C 48 19.449219 47.550781 19 47 19 L 44.28125 19 L 27.96875 8.4375 C 27.992188 8.292969 28 8.152344 28 8 C 28 6.355469 26.644531 5 25 5 Z M 25 7 C 25.5625 7 26 7.4375 26 8 C 26 8.5625 25.5625 9 25 9 C 24.4375 9 24 8.5625 24 8 C 24 7.4375 24.4375 7 25 7 Z M 22.96875 10.21875 C 23.503906 10.710938 24.226562 11 25 11 C 25.773438 11 26.496094 10.710938 27.03125 10.21875 L 40.625 19 L 9.375 19 Z M 4 21 L 5.6875 21 C 5.851562 21.042969 6.023438 21.042969 6.1875 21 L 43.84375 21 C 43.996094 21.039062 44.160156 21.039062 44.3125 21 L 46 21 L 46 43 L 4 43 Z M 11.5 26 C 9.578125 26 8 27.578125 8 29.5 L 8 34.5 C 8 36.421875 9.578125 38 11.5 38 C 13.421875 38 15 36.421875 15 34.5 L 15 29.5 C 15 27.578125 13.421875 26 11.5 26 Z M 17 26 L 17 38 L 19 38 L 19 34 L 20 34 C 22.199219 34 24 32.199219 24 30 C 24 27.800781 22.199219 26 20 26 Z M 26 26 L 26 38 L 32 38 L 32 36 L 28 36 L 28 33 L 31 33 L 31 31 L 28 31 L 28 28 L 32 28 L 32 26 Z M 34 26 L 34 38 L 36 38 L 36 30.5 L 38.03125 37.28125 L 38.25 38 L 41 38 L 41 26 L 39 26 L 39 33.5 L 36.96875 26.71875 L 36.75 26 Z M 11.5 28 C 12.339844 28 13 28.660156 13 29.5 L 13 34.5 C 13 35.339844 12.339844 36 11.5 36 C 10.660156 36 10 35.339844 10 34.5 L 10 29.5 C 10 28.660156 10.660156 28 11.5 28 Z M 19 28 L 20 28 C 21.117188 28 22 28.882812 22 30 C 22 31.117188 21.117188 32 20 32 L 19 32 Z M 19 28 "
      />
    </Svg>
  );
};

export default SvgComponent;
