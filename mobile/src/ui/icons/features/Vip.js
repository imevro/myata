import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

import colorsToGradient from '../../colorsToGradient';

const SvgComponent = ({
  size,
  color = '#000000',
  withGradient = false,
  ...props
}) => {
  const [start, end] = colorsToGradient[(color || '').toLowerCase()] || [];

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
        d="M 5 7 C 2.253906 7 0 9.253906 0 12 L 0 38 C 0 40.746094 2.253906 43 5 43 L 45 43 C 47.746094 43 50 40.746094 50 38 L 50 12 C 50 9.253906 47.746094 7 45 7 Z M 5 9 L 45 9 C 46.65625 9 48 10.34375 48 12 L 48 38 C 48 39.65625 46.65625 41 45 41 L 5 41 C 3.34375 41 2 39.65625 2 38 L 2 12 C 2 10.34375 3.34375 9 5 9 Z M 8.1875 18.6875 L 13.1875 33 L 15.40625 33 L 20.40625 18.6875 L 18.40625 18.6875 L 14.3125 31.09375 L 10.1875 18.6875 Z M 24.09375 18.6875 L 24.09375 33 L 26 33 L 26 18.6875 Z M 31.09375 18.6875 L 31.09375 33 L 33 33 L 33 27.09375 L 37.40625 27.09375 C 38.90625 27.09375 39.988281 26.699219 40.6875 26 C 41.386719 25.300781 41.8125 24.207031 41.8125 22.90625 C 41.8125 21.605469 41.386719 20.511719 40.6875 19.8125 C 39.886719 19.113281 38.804688 18.6875 37.40625 18.6875 Z M 33.09375 20.3125 L 36.8125 20.3125 C 37.914062 20.3125 38.585938 20.601562 39.1875 21 C 39.789062 21.398438 40 22.007812 40 22.90625 C 40 23.804688 39.6875 24.40625 39.1875 24.90625 C 38.6875 25.40625 37.914062 25.59375 36.8125 25.59375 L 36.8125 25.5 L 33.09375 25.5 Z M 33.09375 20.3125 "
      />
    </Svg>
  );
};

export default SvgComponent;
